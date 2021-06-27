import { React } from "react";
import FormComponent from "./FormComponent.js";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-content">
            <h1>Maradj Fokuszban</h1>
            <p>
              Szeretnel idoben ertesulni a kedvenc szallashelyeidrol? iratkozz
              fel hirlevelunkre, es ne aggodj nem szemeteljuk tele a tarhelyed
              ....
            </p>
            <FormComponent />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img
            className="logo-image"
            src="./assets/simax_mapmark_normal.svg"
            alt="logo"
            width="40px"
          />
        </div>
        <div className="footer-menu">
          <a href=""> Rolunk </a>
          <a href=""> Impressum </a>
          <a href=""> Felhasznalasi feltetelek </a>
        </div>

        <p className="footer-copy">@2015,Simax</p>
      </div>
    </footer>
  );
}

export default Footer;
