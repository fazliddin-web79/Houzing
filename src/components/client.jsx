import React, { Component } from "react";
import { data } from "../data";
import Card from "./card/card";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }
  render() {
    return (
      <div>
        <div className="properties wrapper-item">
          <h1>Properties</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>
        <div className="wrapper-cards wrapper-item">
          {this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <Card data={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Client;
