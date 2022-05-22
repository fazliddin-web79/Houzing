import React, { Component } from "react";
import logo from "./icons/Vector.png";
class Navbar extends Component {
  render() {
    return (
      <div className="navigation" id="home">
        <div className="nav-bar wrapper-item">
          <div className="company-item">
            <img src={logo} alt="this is logo" />
            <h3>Houzing</h3>
          </div>
          <div className="nav-bar__links">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Properties</a>
              </li>
              <li>
                <a href="#home">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="nav-bar__controls">
            <button>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
