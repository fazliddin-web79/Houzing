import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./icons/Vector.png";
import { Button } from "./styledNavbar";
class Navbar extends Component {
  render() {
    return (
      <div className="navigation" id="home">
        <div className="nav-bar wrapper-item">
          <div className="company-item">
            <img src={logo} alt="this is logo" />
            <Link
              to={"/products"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <h3>Houzing</h3>
            </Link>
          </div>
          <div className="nav-bar__links">
            <ul>
              <li>
                <a href=" ">Home</a>
              </li>
              <li>
                <a href=" ">Properties</a>
              </li>
              <li>
                <a href=" ">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="nav-bar__controls">
            <Link
              to={"/signin"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
