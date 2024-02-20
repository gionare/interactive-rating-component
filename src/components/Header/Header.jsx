import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="img-div">
        <img className="star-img" src="./public/icon-star.svg" alt="star" />
      </div>
      <h2> How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}
