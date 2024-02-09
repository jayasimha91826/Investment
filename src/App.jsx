import "./index.css";
import Body from "./components/Body";
import { useState } from "react";
import Log from "./components/Log";
//import Logo from "../assets/investment-calculator.png"

function App() {
  const[userInput,setUserInput]=useState(
    {
      initialInvestment:10000,
      anualInvestment:6000,
      expectedReturn:6,
      duration:10
    }
  );

function handleChange(newValue,inputValue){
  setUserInput(prevValue=>{
    return{
      ...prevValue,[inputValue]:+newValue
    }
  })
  //console.log(userInput);
}
  return (
    <main>
      <header id="header">
        <img src="investment-calculator-logo.png"/>
        <h1> Investment Calculator</h1>
      </header>
      
      <Body onChangeInput={handleChange} userInput1={userInput}/>
      <Log data={userInput}/>
    </main>
  ) 
}

export default App
