import "./App.css";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import Btn from "./components/Btn/Btn";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <Header />
        <Score />
        <Btn />
      </div>
    </>
  );
}

export default App;
