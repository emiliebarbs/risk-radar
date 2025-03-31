const Header = ({methodsClicked, setMethodsClicked, 
                aboutUsClicked, setAboutUsClicked,
                mapClicked, setMapClicked,
                showCalcSummary, setShowCalcSummary,
                setSelectedCity
            
            }) => {

    
    const clickMethods = () => {
        setMethodsClicked(true)
        setMapClicked(false)
        setAboutUsClicked(false)
        
    }
    const clickAboutUs = () => {
        setAboutUsClicked(true)
        setMapClicked(false)
        setMethodsClicked(false)
    }
    
    const clickMap = (city) => {
        // add arguments in future to filter map
        setMapClicked(true)
        setAboutUsClicked(false)
        setMethodsClicked(false)
        setShowCalcSummary(false)
        
        if (city) {  
            setShowCalcSummary(true)
            setSelectedCity(city)
        
        }
        
    }


    
    return (
    <header>
        <div className='logo-title'>
          <img 
          className='logo' 
          alt="risk-radar-logo"
          src={require("../images/logo_test.png")} 
          onClick={() => clickMap()}></img>
          <h1 className="title" onClick={() => clickMap()}>Risk Radar</h1>
        </div>

        <div className="chatbot">
        <input className="chatbot-input" placeholder="Ask a question...">
        </input>
        <button className="chatbot-button">⬆️</button>
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
          <button className="dropbtn">ABOUT</button>
          <div className="dropdown-content">
          <button onClick={() => clickMethods()}>Methodology</button>
          <button onClick={() => clickAboutUs()}>Our Team</button>
          </div>
        </div>
        </div>        
        
        
      </header>
    )
    
}

export default Header;