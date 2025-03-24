import React from 'react';
import Print from "./components/test.js"





const App = () => {
  
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "pink"
  }

  const headerStyle = {
    backgroundColor: "red"
  }
  
  
  return (
    <>
    <header style={headerStyle}>
        <img src={require("./images/logo_test.png")}></img>
        <h1>Risk Radar</h1>

      </header>
   
    <div style={style}>
      
      
       <h2>Happy Coding!!</h2>
       <h3>This is working!</h3>
    </div>
    <Print /> 
    </>
    
  );
};







export default App;






