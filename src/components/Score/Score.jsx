import React, { useState } from "react";
import "./Score.css";

export default function Score(props) {
  let buttons = [1, 2, 3, 4, 5];
  console.log("selected rate is: " + props.rate);
  return (
    <div className="pagination">
      {buttons.map((item) => (
        <button
          onClick={() => {
            props.setRate(item);
          }}
          key={item} // neccessary when mapping, or Math.random(), its kinda Id
          className={item == props.rate ? "active" : ""}
        >
          <a href="#"> {item} </a>
        </button>
      ))}
    </div>
  );
}
