import { useState, createContext } from "react";

import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

export const Context = createContext();
function App() {

  const [userInput, setUserInput] = useState({
    initial: null,
    annual: null,
    expRet: null,
    duration: null,
  });
const [answer, setAnswer] = useState([])
  const handleUserInput = (key, val) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [key]: +val,
      };
    });
  };
   const res = [];

  
  const calculateInterest = () => {
    let invetment = userInput.initial;
    for (let i = 0; i < userInput.duration; i++) {
      const interestPerYr = invetment * (userInput.expRet / 100);
      invetment += interestPerYr + userInput.annual;
      const ans = {
      year: i + 1, // year identifier
      interest: interestPerYr, // the amount of interest earned in this year
      valueEndOfYear: invetment, // investment value at end of year
      annualInvestment: userInput.annual, // investment added in this year
    };
    setAnswer((prev)=>[...prev,ans])
    }
  };
  return (
    <Context.Provider value={{userInput,handleUserInput,calculateInterest,answer}}>
      <Header />
      <UserInput />
      <Result/>
    </Context.Provider>
  );
}

export default App;
