import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Chatbot from './chatbot';
import './header.css';

const Header = ({ 
  methodsClicked, setMethodsClicked, 
  aboutUsClicked, setAboutUsClicked,
  mapClicked, setMapClicked,
  showCalcSummary, setShowCalcSummary,
  setSelectedCity, setCategoryClicked,
  chatbotClicked, setChatbotClicked,
   chatbotInput, setChatbotInput,
   question, setQuestion
}) => {

  const clickMethods = () => {
    setMethodsClicked(true);
    setMapClicked(false);
    setAboutUsClicked(false);
  };

  const clickAboutUs = () => {
    setAboutUsClicked(true);
    setMapClicked(false);
    setMethodsClicked(false);
  };

  const clickMap = (city) => {
    setMapClicked(true);
    setAboutUsClicked(false);
    setMethodsClicked(false);
    setShowCalcSummary(false);

    if (city) {
      setShowCalcSummary(true);
      setSelectedCity(city);
      setCategoryClicked("")
    }
  };

  const handleChatbotInputChange = (e) => {
      const text = e.currentTarget.value
      setChatbotInput(text)
  }

  const handleChatbotClicked = () => {
    if (!chatbotInput.trim()) return;
    setChatbotClicked(true);
    setQuestion(chatbotInput)
  };



  return (
    <header>
      <div className='logo-title'>
        <img 
          className='logo' 
          alt="risk-radar-logo"
          src={require("../images/logo.png")} 
          onClick={() => clickMap()}
        />
        <h1 className="light-italic text-shadow" onClick={() => clickMap()}>
          Risk Radar
        </h1>
      </div>

      <div className="chatbot">
        <div className="chatbot-wrapper">
          <input 
            className="chatbot-input" 
            placeholder="  Ask a question..."
            value={chatbotInput}
            onChange={handleChatbotInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleChatbotClicked();}}}
          />
          <button className="chatbot-button" onClick={() => handleChatbotClicked()}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
        {chatbotClicked ? 
         <Chatbot
            question={question}
            setChatbotClicked={setChatbotClicked}
            setChatbotInput={setChatbotInput} />
            : null}
      </div>

      <div className="info-dropdowns">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => clickMap()}>LOCATIONS</button>
          <div className="dropdown-content">
            <button onClick={() => clickMap("Los Angeles")}>Los Angeles</button>
            <button onClick={() => clickMap("Denver")}>Denver</button>
            <button onClick={() => clickMap("Tampa")}>Tampa</button>
          </div>
        </div> 

        <div className="dropdown">
          <button className="dropbtn">ABOUT US</button>
          <div className="dropdown-content">
            <button onClick={() => clickMethods()}>Methodology</button>
            <button onClick={() => clickAboutUs()}>Our Team</button>
          </div>
        </div>
      </div>        
    </header>
  );
};

export default Header;