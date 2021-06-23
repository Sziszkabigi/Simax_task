import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Destination extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>This is my profile</h1>
        <Link to="/">Go back to App</Link>
        <Header />
        <div className="hero-2-container">
          <h1> Les 2 ALpes </h1>
          <h1> 3600 </h1>
          <img
            className="siterep"
            src="./assets/simax_siterepek_mountains.svg"
            alt=""
          />
        </div>

        <div className="sky-detail">
          <ul>
            <li>
              <div className="box1">
                <img src="./assets/simax_filter_euro.svg" alt="" />
                <p>valami</p>
                <p>valami</p>
              </div>
            </li>
            <li>
              <div className="box2">
                <img src="./assets/simax_filter_euro.svg" alt="" />
                <p>valami</p>
                <p>valami</p>
              </div>
            </li>
            <li>
              <div className="box3">
                <img src="./assets/simax_filter_euro.svg" alt="" />
                <p>valami</p>
                <p>valami</p>
              </div>
            </li>
            <li>
              <div className="box4">
                <img src="./assets/simax_filter_euro.svg" alt="" />
                <p>valami</p>
                <p>valami</p>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
