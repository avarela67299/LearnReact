

import React, { useState } from "react";

export default function ConditionalSection() {
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
    </div>
  );
}
