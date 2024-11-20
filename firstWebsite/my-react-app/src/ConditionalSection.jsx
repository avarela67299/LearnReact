

import React, { useState } from "react";

export default function ConditionalSection(props) {
  
  let conditionalContent;
  if(props.conditional){
    conditionalContent = <h2>this is true: conditional rendering</h2>
  }
  else{
    conditionalContent = <h2>this is false: conditional rendering</h2> 

  }
  
  // Step 1: Use state to track the toggle's status
  const [isToggled, setIsToggled] = useState(false);

  // Step 2: Toggle handler function
  const handleToggle = () => {
    setIsToggled(!isToggled); // Flip the state between true and false
  };

  return (
    <div className="conditional-section content">
      <h2>Conditional Section</h2>
      <p>Unsing React useState </p>
      <p>Change the toggle switch and you can see: {isToggled ? "ON" : "OFF"}</p>

      {/* Step 3: Controlled checkbox */}
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled} // Controlled by state
          onChange={handleToggle} // Updates the state
        />
        <span className="slider"></span>
      </label>

      {/* Example: Conditional Content */}
      {isToggled && <p>The toggle is ON! 🎉</p>}
      {!isToggled && <p>The toggle is OFF. 💡</p>}
      <hr></hr>
      {conditionalContent}
      <p> 
        JSX only allows expressions, not statements. Use the ternary operator for simple conditions.
        For more complex logic, use a variable outside the return statement to store the result of the condition and render the variable inside JSX.
        if-else is a statement, not a value, so it must be handled outside JSX or rewritten using the ternary operator. The return can be inside the if-else. For a null output you can use &&.
      </p>
</div>
  );
}
