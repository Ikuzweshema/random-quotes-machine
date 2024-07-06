
import { useState } from 'react';
import './App.css';
import qoutes from "./assets/qoutes.json"
function App() {

  function getRandomQoute() {
    return qoutes[Math.floor(Math.random()*qoutes.length)];
  }
  const[qoute,setQoute]=useState(getRandomQoute())
  
  return <div>
      <div id='qoute-box'>
        <div className='qoute-content'>
           <h2 id='text'>{qoute.quote}</h2>
           <h4 id=''>{qoute.author}</h4>
        </div>
      </div>
  </div>

}

export default App
