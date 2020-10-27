import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="nav-link" to="/Spotify"><h1>GEO<span className="highlight">JAM</span>MER</h1></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Spotify">
              Spotify
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;