import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.js";
import Footer from "./Footer.js";
import Header from "./Header.js";

export default class Destination extends React.Component {
  render() {
    return (
      <div className="container">
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

        <div className="dest-middle">
          <div className="dest-middle-l">
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

          <div className=" dest-middle-r">
            <button type="button" class="btn btn-success">
              Success
            </button>
            <ul className="ul-button">
              <li>
                <button type="button" className="btn btn-success">
                  Success
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-success">
                  Success
                </button>
              </li>
            </ul>

            <h1>Miert szeretjuk?0km</h1>

            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>A vilag egyik leghiresebb sikozpontja</p>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>A vilag egyik leghiresebb sikozpontja</p>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>A vilag egyik leghiresebb sikozpontja</p>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>A vilag egyik leghiresebb sikozpontja</p>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./assets/simax_siterep_szallas.svg" alt="" />
                <p>A vilag egyik leghiresebb sikozpontja</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="map">MAP</div>

        <h2>A siterep Szallasai</h2>

        <div className="dest-bottom">
          <div className="pic-box">
            <h3> The People Hostel </h3>
          </div>
          <div className="pic-box">
            <h3> The People Hostel </h3>
          </div>
          <div className="pic-box">
            <h3> The People Hostel </h3>
          </div>
        </div>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <Footer />
      </div>
    );
  }
}
