import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import "./styles.css";

var break_val = 5;
var session_val = 25;
var time_min=25;
var time_sec=0;
var curr_state='Session'
const Break = () => {
  return (
    <div id="break-length">
      <h1 id="break-label">Break</h1>
      <i id="break-increment" className="fas fa fa-plus"></i>
      &nbsp;&nbsp;&nbsp;{break_val} &nbsp;&nbsp;&nbsp;
      <i className="fas fa fa-minus" id="break-decrement"></i>
    </div>
  );
};

const Session = () => {
  return (
    <div id="session-length">
      <h1 id="session-label">Session</h1>
      <i id="session-increment" className="fas fa fa-plus"></i>
      &nbsp;&nbsp;&nbsp;{session_val}&nbsp;&nbsp;&nbsp;
      <i className="fas fa fa-minus" id="session-decrement"></i>
    </div>
  );
};

const SetTimer=()=>{
return <div><div id="timer-label">
  <h1>{curr_state}</h1>
<h1 id="time-left">{time_min}:{time_sec}</h1>
<i id="control"className="fas fa fa-play"></i>&nbsp;&nbsp;&nbsp;
  <i id="control"className="fas fa fa-pause"></i>&nbsp;&nbsp;&nbsp;
  <i id="control"className="fas fa fa-refresh"></i>
  </div>
 
  </div>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="flex">
          <Break />
          <Session />
          <SetTimer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
