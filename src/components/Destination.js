import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
                <h1>
                  200 <span> m </span>{" "}
                </h1>
                <p>Sipalya hossza</p>
              </div>
            </li>
            <li>
              <div className="box">
                <img src="./assets/simax_siterep_magassag.svg" alt="" />
                <h1>
                  1280-3250 <span> km </span>{" "}
                </h1>
                <p>Magassag</p>
              </div>
            </li>
            <li>
              <div className="box">
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <h1>100 </h1>
                <p>Szallas</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="detail-row">
          <div className="detail-row-r">
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
            </ul>
          </div>
          <div className="detail-row-r">
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>0km </p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <article>
              <h1>Les 2 Alpes 3600 -a jegbe zart paradicsom.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut mi tellus. In ornare fermentum iaculis. Integer viverra a
                tellus sed laoreet. Donec tempor ipsum erat, at dapibus est
                pharetra vel. Sed efficitur vestibulum aliquet. Mauris suscipit
                orci nec enim dictum, ac imperdiet enim interdum. Morbi eget
                ante nisl. Nam ornare est eu eros eleifend, et gravida elit
                hendrerit. Sed tincidunt purus non metus volutpat, ut cursus
                nulla scelerisque. Vivamus at posuere nisl, et luctus nunc.
                Morbi at nulla orci. Donec consequat rutrum vulputate. Curabitur
                vel ornare leo. Sed pretium purus sed tincidunt condimentum.
                Maecenas quis lacus odio.
              </p>
            </article>
            <article>
              <h1>Les 2 Alpes 3600 -a jegbe zart paradicsom.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut mi tellus. In ornare fermentum iaculis. Integer viverra a
                tellus sed laoreet. Donec tempor ipsum erat, at dapibus est
                pharetra vel. Sed efficitur vestibulum aliquet. Mauris suscipit
                orci nec enim dictum, ac imperdiet enim interdum. Morbi eget
                ante nisl. Nam ornare est eu eros eleifend, et gravida elit
                hendrerit. Sed tincidunt purus non metus volutpat, ut cursus
                nulla scelerisque. Vivamus at posuere nisl, et luctus nunc.
                Morbi at nulla orci. Donec consequat rutrum vulputate. Curabitur
                vel ornare leo. Sed pretium purus sed tincidunt condimentum.
                Maecenas quis lacus odio.
              </p>
            </article>
            <article>
              <h1>Les 2 Alpes 3600 -a jegbe zart paradicsom.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut mi tellus. In ornare fermentum iaculis. Integer viverra a
                tellus sed laoreet. Donec tempor ipsum erat, at dapibus est
                pharetra vel. Sed efficitur vestibulum aliquet. Mauris suscipit
                orci nec enim dictum, ac imperdiet enim interdum. Morbi eget
                ante nisl. Nam ornare est eu eros eleifend, et gravida elit
                hendrerit. Sed tincidunt purus non metus volutpat, ut cursus
                nulla scelerisque. Vivamus at posuere nisl, et luctus nunc.
                Morbi at nulla orci. Donec consequat rutrum vulputate. Curabitur
                vel ornare leo. Sed pretium purus sed tincidunt condimentum.
                Maecenas quis lacus odio.
              </p>
            </article>
            <article>
              <h1>Les 2 Alpes 3600 -a jegbe zart paradicsom.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut mi tellus. In ornare fermentum iaculis. Integer viverra a
                tellus sed laoreet. Donec tempor ipsum erat, at dapibus est
                pharetra vel. Sed efficitur vestibulum aliquet. Mauris suscipit
                orci nec enim dictum, ac imperdiet enim interdum. Morbi eget
                ante nisl. Nam ornare est eu eros eleifend, et gravida elit
                hendrerit. Sed tincidunt purus non metus volutpat, ut cursus
                nulla scelerisque. Vivamus at posuere nisl, et luctus nunc.
                Morbi at nulla orci. Donec consequat rutrum vulputate. Curabitur
                vel ornare leo. Sed pretium purus sed tincidunt condimentum.
                Maecenas quis lacus odio.
              </p>
            </article>
          </div>
          <button type="button" class="btn btn-success">
            Success
          </button>
          <button class="btn btn-primary" type="submit">
            Button
          </button>
          <a class="btn btn-primary" href="#" role="button">
            Link
          </a>
          <a class="btn btn-primary" href="#" role="button">
            Link
          </a>
          <a class="btn btn-primary" href="#" role="button">
            Link
          </a>
        </div>

        <div className="map">MAP</div>

        <Footer />
      </div>
    );
  }
}
