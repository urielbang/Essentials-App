import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputIdentifier]: +newValue };
    });
  };

  const isValidInput = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter a duration greater then zero.</p>
      )}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App;
