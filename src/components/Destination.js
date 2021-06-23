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
              <div className="box">
                <img src="./assets/simax_siterep_sipalya.svg" alt="" />
                <h1>100</h1>
                <p>Sipalya</p>
              </div>
            </li>
            <li>
              <div className="box">
                <img src="./assets/simax_siterep_sipalya_hossz.svg" alt="" />
                <h1>200</h1>
                <p>Sipalya hossza</p>
              </div>
            </li>
            <li>
              <div className="box">
                <img src="./assets/simax_siterep_magassag.svg" alt="" />
                <h1>1280-3250</h1>
                <p>Magassag</p>
              </div>
            </li>
            <li>
              <div className="box">
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <h1>100</h1>
                <p>Szallas</p>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
