import React, { Component } from "react";
import { data } from "../../data";
import Hause from "../house/index.jsx";
import houseInput from "../icons/house-input.svg";
import settingsInput from "../icons/setting-input.svg";
import searchBtn from "../icons/search-btn.svg";
import {
  Container,
  Search,
  ContainerInput,
  WrapBg,
  BtnWrap,
} from "./clientStyle";

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
        <div className="wrapper-item search-panel">
          <div className="input-content">
            <img src={houseInput} alt="" />
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
          </div>
          <div className="btn-content">
            <button>
              <img src={settingsInput} alt="" />
              Advanced
            </button>
            <button>
              <img src={searchBtn} alt="" />
              Search
            </button>
          </div>
        </div>
        <Search>
          <Container>
            <ContainerInput>
              <h2>Address</h2>
              <div>
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Region" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Zip code" />
              </div>
            </ContainerInput>
            <ContainerInput>
              <h2>Apartment info</h2>
              <div>
                <input type="text" placeholder="Rooms" />
                <input type="text" placeholder="Size" />
                <input type="text" placeholder="Sort" />
              </div>
            </ContainerInput>
            <ContainerInput>
              <h2>Price</h2>
              <div>
                <input type="text" placeholder="Min price" />
                <input type="text" placeholder="Max price" />
              </div>
            </ContainerInput>
          </Container>
          <hr />
          <WrapBg>
            <Container type="margin">
              <BtnWrap>
                <button>Clear search Panel</button>
              </BtnWrap>
            </Container>
          </WrapBg>
        </Search>
        <div className="properties wrapper-item">
          <h1>Properties</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>
        <div className="wrapper-cards wrapper-item">
          {/* <Card data={this.state.data[0]} />
          <Hause data={this.state.data[0]} /> */}
          {this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <Hause data={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Client;
