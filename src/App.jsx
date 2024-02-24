import { useState } from "react"; // to be able to use props, useState
import "./App.css";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import Btn from "./components/Btn/Btn";
import ThankYouCard from "./components/ThankYouCard/ThankYouCard";
import Fire from "./components/Fire/Fire";

function App() {
  const [submit, setSubmit] = useState(false); // using props for Btn.jsx
  const [rate, setRate] = useState(); // brought it from local Score.js and will give it back as an props.rate

  return (
    // state lifting is happening here e.x rate={rate}
    <div className="card">
      <div className="box">
        {submit ? (
          <ThankYouCard rate={rate} />
        ) : (
          <>
            <Header />
            <Score rate={rate} setRate={setRate} />
            <Btn setSubmit={setSubmit} rate={rate} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
