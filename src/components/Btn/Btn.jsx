import React from "react";
import "./Btn.css";

export default function Btn(props) {
  return (
    <>
      <button
        className="button"
        onClick={() => {
          if (props.rate) {
            props.setSubmit(true);
            console.log("Submission is happening");
          }
        }}
      >
        S U B M I T{" "}
      </button>
    </>
  );
}

// props is coming from app.jsx
