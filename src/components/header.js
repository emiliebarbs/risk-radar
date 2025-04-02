import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = ({ 
  methodsClicked, setMethodsClicked, 
  aboutUsClicked, setAboutUsClicked,
  mapClicked, setMapClicked,
  showCalcSummary, setShowCalcSummary,
  setSelectedCity 
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
    }
  };

  return (
    <header>
      <div className='logo-title'>
        <img 
          className='logo' 
          alt="risk-radar-logo"
          src={require("../images/logo_test.png")} 
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
          />
          <button className="chatbot-button">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
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
