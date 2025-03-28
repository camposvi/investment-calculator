import { useState } from 'react';

const UserInput = ({}) => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputInfo]: newValue };
    });
  };
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            defaultValue={userInput.initialInvestment}
            onChange={(event) =>
              handleChange('initialInvestment', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            defaultValue={userInput.annualInvestment}
            onChange={(event) =>
              handleChange('annualInvestment', event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            defaultValue={userInput.expectedReturn}
            onChange={(event) =>
              handleChange('expectedReturn', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            defaultValue={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
};
export default UserInput;
