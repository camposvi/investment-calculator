import Header from './components/Header/Header';
import UserInput from './components/User/UserInput';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';
import { calculateInvestmentResults } from './util/investment';
import { useState } from 'react';
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  };
  // const investmentData = calculateInvestmentResults(investmentInput);
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <InvestmentResult investmentData={userInput} />
    </>
  );
}

export default App;
