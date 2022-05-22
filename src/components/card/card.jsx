import React, { Component } from "react";
import bed from "../icons/bed.svg";
import bath from "../icons/bath.svg";
import garage from "../icons/garage.svg";
import ruller from "../icons/ruller.svg";
import like from "../icons/like.svg";
import vektor from "../icons/vektor.svg";

class Card extends Component {
  render() {
    const { title, info, price } = this.props.data;
    console.log(this.props.data);
    return (
      <div className="card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${this.props.data.bgImg})`,
          }}
        >
          <div className="wrapper img-btns">
            <button className="btn-bg">Featured</button>
            <button className="btn-bg">For Sale</button>
          </div>
          <div className="person-img">
            <img src={this.props.data.personImg} alt="this is person" />
          </div>
        </div>
        <div className="wrapper">
          <div className="card-title">
            <h3>{title.titleName}</h3>
            <p>{title.address}</p>
          </div>
          <div className="card-feature">
            <div>
              <img src={bed} alt="" />
              <p>{info.bed} Beds</p>
            </div>
            <div>
              <img src={bath} alt="" />
              <p>{info.bath} Baths</p>
            </div>
            <div>
              <img src={garage} alt="" />
              <p>{info.garage} Garage</p>
            </div>
            <div>
              <img src={ruller} alt="" />
              <p>{info.field} Sq Ft</p>
            </div>
          </div>
          <hr />
          <div className="card-control">
            <div className="card-price">
              <h3>${price.before}/mo</h3>
              <h3>${price.after}/mo</h3>
            </div>
            <div className="card-control-btn">
              <img src={vektor} alt="this is vektor" />
              <img src={like} alt="this is vektor" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
