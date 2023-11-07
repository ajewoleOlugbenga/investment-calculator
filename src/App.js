import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results';

const App = () => {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  const HandleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
        //the + is added to change the values to number because javascript will display any number in input as string
      };
    });
  };

  const inputIsValid = userInput.duration >=1

  return (
    <>
    <Header/>
    <main>
      <UserInput HandleChange={HandleChange} userInput={userInput} />
      {inputIsValid ? <Results input={userInput} /> : <p className='center'>Please enter a duration greater than zero</p>}
    </main>
    </>
  )
}

export default App
