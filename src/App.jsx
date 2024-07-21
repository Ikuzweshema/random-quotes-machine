import { useState } from "react";
import "./App.css";
import qoutes from "./assets/qoutes.json";
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
function App() {
  const [quote, setQuote] = useState(getRandomQoute());
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const encodeQuote = encodeURIComponent(`${quote.quote}\n- ${quote.author}`);
  const twitterPostUrl = `https://x.com/intent/post?text=${encodeQuote}`
  function getRandomQoute() {
    return qoutes[Math.floor(Math.random() * qoutes.length)];
  }
  function changeQoute() {
    setRandomColor(getRandomColor());
    setQuote(getRandomQoute());
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
          {"  "}  {quote.quote} {"  "}
            <FaQuoteRight size={30} style={{ marginRight: "10px" }} />
          </h2>

          <h4 id=" author">{quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={twitterPostUrl}
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
