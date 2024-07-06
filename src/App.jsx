import { useState } from "react";
import "./App.css";
import qoutes from "./assets/qoutes.json";
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
function App() {
  const [qoute, setQoute] = useState(getRandomQoute());
  const [randomColor, setRandomColor] = useState(getRandomColor());
  function getRandomQoute() {
    return qoutes[Math.floor(Math.random() * qoutes.length)];
  }
  function changeQoute() {
    setRandomColor(getRandomColor());
    setQoute(getRandomQoute());
  }
  function getRandomColor() {
    const red = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    return `rgb(${red},${green},${blue})`;
  }
  const transition ="all 1s"
  return (
    <div className=" background" style={{ backgroundColor: randomColor,transition }}>
      <div id="quote-box">
        <div className="qoute-content">
          <h2 id="text">
            {" "}
            <FaQuoteLeft size={30} style={{ marginLeft: "10px" }} />
          {"  "}  {qoute.quote} {"  "}
            <FaQuoteRight size={30} style={{ marginRight: "10px" }} />
          </h2>

          <h4 id=" author">{qoute.author}</h4>
        </div>
        <div className="buttons">
          <a
            href="twitter.com/intent/tweet"
            style={{ backgroundColor: randomColor }}
            color="white"
          >
            <FaTwitter />
          </a>
          <button
            id="new-qoute"
            onClick={changeQoute}
            style={{ backgroundColor: randomColor,transition }}
          >
            Change Qoute
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
