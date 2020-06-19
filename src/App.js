import React, {useState} from 'react';
import Message from './Message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [DayTime, setDayTime] = useState(true);
  return (
    <div className={DayTime? "Morning" : "Night" }>
     <h1 className="center">DayTime: {DayTime? "Morning" : "Night"}</h1>
     <Message counter={count} />
     <button className="buttonCenter" onClick={()=> setCount(++count)}>Increament Counter</button>
     <br />
     <button className="buttonCenter" onClick={()=> setDayTime(!DayTime)}>Change Day Time</button>
    </div>
  );
}

export default App;
