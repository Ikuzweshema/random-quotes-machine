import { useState } from "react";
import "./App.css";
import qoutes from "./assets/qoutes.json";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function App() {
  function getRandomQoute() {
    return qoutes[Math.floor(Math.random() * qoutes.length)];
  }
  const [qoute, setQoute] = useState(getRandomQoute());

  return (
    <div className=" background">
      <div id="qoute-box">
        <div className="qoute-content">
          <FaQuoteLeft size={30} style={{ marginLeft: "10px" }} />
          <h2 id="text">{qoute.quote}</h2>
          <FaQuoteRight size={30} style={{ marginRight: "10px" }} />
          <h4 id=" author">{qoute.author}</h4>
        </div>
        <div className="buttons">
           <a href="twitter.com/intent/tweet"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
