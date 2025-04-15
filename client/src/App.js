import React from 'react';
import Header from "./components/header.js"
import Map from "./components/map.js"
import Methodology from './components/method-page.js';
import AboutUs from './components/about-us.js';
import CalcSummary from './components/calcSummary.js';
import Calculator from './components/calculator.js';



const App = () => {

  const [methodsClicked, setMethodsClicked] = React.useState(false)
  const [aboutUsClicked, setAboutUsClicked] = React.useState(false)
  const [mapClicked, setMapClicked] = React.useState(true)
  
  const [selectedCity, setSelectedCity] = React.useState("")
  const [showCalcSummary, setShowCalcSummary] = React.useState(false)
  const [categoryClicked, setCategoryClicked] = React.useState("")

  const [chatbotClicked, setChatbotClicked] = React.useState(false)
  const [chatbotInput, setChatbotInput] = React.useState("")
  const [question, setQuestion] = React.useState("")


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
    setCategoryClicked={setCategoryClicked}
    chatbotClicked={chatbotClicked}
    setChatbotClicked={setChatbotClicked}
    chatbotInput={chatbotInput}
    setChatbotInput={setChatbotInput}
    question={question}
    setQuestion={setQuestion}

     />
     
    <Map
    selectedCity={selectedCity}
    />

      {showCalcSummary && selectedCity ? (
      <>
      <Calculator 
      selectedCity={selectedCity}
      setCategoryClicked={setCategoryClicked}
      />
      <CalcSummary 
        selectedCity={selectedCity}
        setShowCalcSummary={setShowCalcSummary}
        categoryClicked={categoryClicked}/>
      </> 
            ): null

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
      setCategoryClicked={setCategoryClicked}
      chatbotClicked={chatbotClicked}
      setChatbotClicked={setChatbotClicked}
      chatbotInput={chatbotInput}
      setChatbotInput={setChatbotInput}
      question={question}
      setQuestion={setQuestion}
      
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
      setCategoryClicked={setCategoryClicked}
      chatbotClicked={chatbotClicked}
      setChatbotClicked={setChatbotClicked}
      chatbotInput={chatbotInput}
      setChatbotInput={setChatbotInput}
      question={question}
      setQuestion={setQuestion}
       />
     
      <AboutUs />
    
      </>
    );

  }

  
};



export default App;






