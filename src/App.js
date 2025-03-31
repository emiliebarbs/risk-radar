import React from 'react';
import Header from "./components/header.js"
import Map from "./components/map.js"
import Methodology from './components/method-page.js';
import AboutUs from './components/about-us.js';
import CalcSummary from './components/calcSummary.js';



const App = () => {

  const [methodsClicked, setMethodsClicked] = React.useState(false)
  const [aboutUsClicked, setAboutUsClicked] = React.useState(false)
  const [mapClicked, setMapClicked] = React.useState(true)
  
  const [selectedCity, setSelectedCity] = React.useState("")
  const [showCalcSummary, setShowCalcSummary] = React.useState(false)



  if (mapClicked) {
    return (
      <>
    <Header
    methodsClicked={methodsClicked}
    setMethodsClicked={setMethodsClicked}
    aboutUsClicked={aboutUsClicked}
    setAboutUsClicked={setAboutUsClicked}
    mapClicked={mapClicked}
    setMapClicked={setMapClicked}
    showCalcSummary={showCalcSummary}
    setShowCalcSummary={setShowCalcSummary}
    setSelectedCity={setSelectedCity}

     />
    <Map
    methodsClicked={methodsClicked}
    aboutUsClicked={aboutUsClicked}
    />

      {showCalcSummary && selectedCity ? 
      <CalcSummary 
        selectedCity={selectedCity}/> : null
  }
   
     </>
    ) 
  } else if (methodsClicked) {
    
    return (
      <>
      <Header
      methodsClicked={methodsClicked}
      setMethodsClicked={setMethodsClicked}
      aboutUsClicked={aboutUsClicked}
      setAboutUsClicked={setAboutUsClicked}
      mapClicked={mapClicked}
      setMapClicked={setMapClicked}
      showCalcSummary={showCalcSummary}
      setShowCalcSummary={setShowCalcSummary}
      setSelectedCity={setSelectedCity}
      
       />
     
      <Methodology />
    
      </>
    );

  }
  else if (aboutUsClicked) {
    
    return (
      <>
      <Header
      methodsClicked={methodsClicked}
      setMethodsClicked={setMethodsClicked}
      aboutUsClicked={aboutUsClicked}
      setAboutUsClicked={setAboutUsClicked}
      mapClicked={mapClicked}
      setMapClicked={setMapClicked}
      showCalcSummary={showCalcSummary}
      setShowCalcSummary={setShowCalcSummary}
      setSelectedCity={setSelectedCity}
       />
     
      <AboutUs />
    
      </>
    );

  }

  
};



export default App;






