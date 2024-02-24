import star from "../../assets/icon-star.svg";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="img-div">
        <img className="star-img" src={star} alt="star" />
      </div>
      <h2 className="heading">
        {" "}
        <span className="heading-span">How did we do?</span>
      </h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}
