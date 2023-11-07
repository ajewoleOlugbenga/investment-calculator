import React from "react";

const UserInput = (props) => {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(event) =>
              props.HandleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(event) =>
              props.HandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(event) =>
              props.HandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(event) => props.HandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
