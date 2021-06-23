import { React } from "react";
import Triangle from "./Triangle.js";
import Header from "./Header.js";

function Hero() {
  return (
    <div className="hero-container">
      <div className="svg-cover">
        <Triangle width={900} height={522} fill="#FF1044" />
      </div>
      <Header />
      <div className="hero-content">
        <h1>Szuperieur lejtok </h1>
        <h1>Szuperieur aron. </h1>
        <p> Csuszik a francia? Sielj velunk!</p>
      </div>
    </div>
  );
}

export default Hero;
