import React, { useState } from "react";
import "./fire.css"; // Import CSS file for styling

export default function Fire() {
  const [value, setValue] = useState(5); // State to track the value of the range input

  // Event handler function to update the flame and glow styles based on the input value
  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue); // Update state with the new value

    // Calculate flame transform and glow opacity based on the input value
    const flameTransform = `scale(${newValue}) translate(-13px, -15px)`;
    const glowOpacity = newValue * 0.1;

    // Apply styles to flame and glow elements
    document
      .querySelector(".flame")
      .style.setProperty("transform", flameTransform);
    document.querySelector(".glow").style.setProperty("opacity", glowOpacity);
  };

  return (
    <div>
      <label htmlFor="range">Play With Fire</label>
      <input
        id="range"
        className="range"
        max="11"
        min="3"
        step="2"
        type="range"
        value={value}
        onChange={handleInputChange} // Call handleInputChange function when input value changes
      />
      <div className="glow"></div>
      <div className="flame"></div>
    </div>
  );
}
