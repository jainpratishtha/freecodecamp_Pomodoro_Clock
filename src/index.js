import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component{
  render(){return <div>hello</div>;}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
