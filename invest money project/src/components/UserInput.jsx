import React, { useContext  } from "react";
import "../styles/userIput.css";
import { Context } from "../App.jsx";
import Result from "./Result.jsx";


export default function UserInput() {
  
const {userInput,handleUserInput,calculateInterest,answer} = useContext(Context);
  const handleSubmit=()=>{
    console.log('userInput', userInput)
calculateInterest();
console.log('res', answer)
// return <Result/>
  }
  return (
    <div>
      <form id="user-input">
        <p className="input-group">
          <label htmlFor="input">initial Investment</label>
          <input
            type="text"
            onChange={(e) => {
              handleUserInput('initial',e.target.value);
            }}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">annual Investment</label>
          <input
            type="text"
            onChange={(e) => {
               handleUserInput('annual',e.target.value);
            }}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">expected Return</label>
          <input
            type="text"
            onChange={(e) => {
               handleUserInput('expRet',e.target.value);
            }}
          />
        </p>
        <p className="input-group">
          <label htmlFor="input">duration</label>
          <input
            type="text"
            onChange={(e) => {
               handleUserInput('duration',e.target.value);
            }}
          />
        </p>

        <input type="button" value="submit" id="btn" onClick={handleSubmit}/>
      </form>
    </div>
  );
}
