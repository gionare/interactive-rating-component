import React from "react";
import "./ThankYouCard.css";

export default function ThankYouCard(props) {
  return (
    <>
      <img src="./public/illustration-thank-you.svg" alt="thank you" />
      <p className="selected-score">You selected {props.rate} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
}
