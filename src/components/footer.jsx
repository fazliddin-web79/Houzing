import React, { Component } from "react";
import facebook from "./icons/facebook.svg";
import twitter from "./icons/twitter.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import email from "./icons/email.svg";
import location from "./icons/location.svg";
import phone from "./icons/phone.svg";
import logo from "./icons/Vector.png";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="wrapper-item footer-info-wrap">
          <div className="footer-left__info">
            <h2 className="footer-item__title">Contact Us</h2>
            <p>
              <img src={location} alt="this is location" />
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </p>
            <p>
              <img src={phone} alt="this is phone" /> 123 456 7890
            </p>
            <p>
              <img src={email} alt="this is email" />{" "}
              fazliddinYakubjonov@gmail.com
            </p>
            <div className="icons-custom">
              <div>
                <img src={facebook} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
              <div>
                <img src={instagram} alt="" />
              </div>
              <div>
                <img src={linkedin} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-right__info">
            <div className="footer-info">
              <h1 className="footer-item__title">Discover</h1>
              <p>Chicago</p>
              <p>Los Angeles</p>
              <p>Miami</p>
              <p>New York</p>
            </div>
            <div className="footer-info">
              <h1 className="footer-item__title">Lists by Category</h1>
              <p>Apartments</p>
              <p>Candos</p>
              <p>Houses</p>
              <p>Offices</p>
              <p>Retail</p>
              <p>Villas</p>
            </div>
            <div className="footer-info">
              <h1 className="footer-item__title">Lists by Category</h1>
              <p>About As</p>
              <p>Terms & Conditions</p>
              <p>Support Center</p>
              <p>Contact US</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="wrapper-item footer-bottom">
          <div className="left-footer__company">
            <img src={logo} alt="" />
            <h1>Houzing</h1>
          </div>
          <div className="right-footer__title">
            <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
