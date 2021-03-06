import React, { Component } from "react";
import bed from "../icons/bed.svg";
import bath from "../icons/bath.svg";
import garage from "../icons/garage.svg";
import ruller from "../icons/ruller.svg";
import like from "../icons/like.svg";
import liked from "../icons/lined.svg";
import upPrice from "../icons/up-price.svg";
import downPrice from "../icons/down-price.svg";
import { CardStyled } from "./style.js";

class Hause extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: like,
      wasLiked: false,
      count: 0,
    };
  }
  render() {
    const after = this.props.data.after;
    const before = this.props.data.before;
    const afterStr = "" + parseInt(after / 1000) + "," + (after % 1000);
    const beforeStr = "" + parseInt(before / 1000) + "," + (before % 1000);

    const isLiked = (id) => {
      if (!this.state.wasLiked) {
        this.setState({ isLike: liked, wasLiked: true });
      } else {
        this.setState({ isLike: like, wasLiked: false });
      }
      this.props.onClick(id);
    };
    const onUp = () => {
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };
    const onDown = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };

    return (
      <CardStyled>
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
            <h3>{this.props.data.title}</h3>
            <p>
              {this.props.data.zip} {this.props.data.city}{" "}
              {this.props.data.region} {this.props.data.country}{" "}
            </p>
          </div>
          <div className="card-feature">
            <div>
              <img src={bed} alt="" />
              <p>{this.props.data.bed} Beds</p>
            </div>
            <div>
              <img src={bath} alt="" />
              <p>{this.props.data.bath} Baths</p>
            </div>
            <div>
              <img src={garage} alt="" />
              <p>{this.props.data.garage} Garage</p>
            </div>
            <div>
              <img src={ruller} alt="" />
              <p>{this.props.data.field} Sq Ft</p>
            </div>
          </div>
          <hr />
          <div className="card-control">
            <div className="card-price">
              <h3>${beforeStr}/mo</h3>
              <h3>${afterStr}/mo</h3>
            </div>
            <div className="buys-card">
              <h2>{this.state.count}</h2>
            </div>
            <div className="card-control-btn">
              <div className="is-buy">
                <img src={upPrice} onClick={onUp} alt="this is vektor" />
                <img src={downPrice} onClick={onDown} alt="this is vektor" />
              </div>
              <img
                src={this.state.isLike}
                onClick={() => isLiked(this.props.data.id)}
                className="is-like"
                alt="this is vektor"
              />
            </div>
          </div>
        </div>
      </CardStyled>
    );
  }
}

export default Hause;
