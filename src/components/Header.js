import { React } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a className="logo">
        <img
          className="logo-image"
          src="./assets/simax_mapmark_normal.svg"
          alt="logo"
          width="40px"
        />
        <span>Simax </span>
      </a>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a className="menu-link" target="_self" title="FOOLDAL">
              <Link to="/">Fooldal</Link>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="SITEREPEK">
              SITEREPEK{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="TUDNIVALOK ">
              TUDNIVALOK{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="" title="BIZTOSITAS">
              BIZTOSITAS{" "}
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="" target="_self" title="kapcsolat">
              kapcsolat{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
