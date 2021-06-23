import { React } from "react";
import "../App.css";
import Hero from "./Hero.js";
import Filter from "./Filter.js";
import Card from "./Card.js";
import EmphasizedBox from "./Emphasized-box.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <Hero />
        <Filter />
        <Card />
        <EmphasizedBox />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
