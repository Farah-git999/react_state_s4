import React from 'react';
import './App.css';

function Message(props) {
    return(
        <h1 className="center">Counter: {props.counter}</h1>
    );
}

export default Message;