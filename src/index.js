//import React from "react";
//import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./components/App";

//ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import Home from "./components/Home.js";
import Destination from "./components/Destination.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/destination" exact component={Destination} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
