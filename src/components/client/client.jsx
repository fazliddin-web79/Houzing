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
  EmptyData,
} from "./clientStyle";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      data,
      notFound: false,
    };
  }
  render() {
    const onChange = ({ target }) => {
      const { name, value } = target;
      let res = data.filter((item) =>
        `${item[name]}`.toLowerCase().includes(value.toLowerCase())
      );
      res.length === 0
        ? this.setState({ notFound: true })
        : this.setState({ notFound: false });
      this.setState({ data: res });
    };
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
            <button
              onClick={() => {
                this.setState({ searching: !this.state.searching });
              }}
            >
              <img src={settingsInput} alt="" />
              Advanced
            </button>
            <button>
              <img src={searchBtn} alt="" />
              Search
            </button>
          </div>

          {this.state.searching ? (
            <Search>
              <Container>
                <ContainerInput>
                  <h2>Address</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="Country"
                      name="country"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Region"
                      name="region"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Zip code"
                      name="zip"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </ContainerInput>
                <ContainerInput>
                  <h2>Apartment info</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="Rooms"
                      name="bed"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Size"
                      name="field"
                      onChange={(e) => onChange(e)}
                    />
                    <input type="text" placeholder="Sort" />
                  </div>
                </ContainerInput>
                <ContainerInput>
                  <h2>Price</h2>
                  <div>
                    <input
                      type="text"
                      placeholder="Min price"
                      name="before"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Max price"
                      name="after"
                      onChange={(e) => onChange(e)}
                    />
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
          ) : null}
        </div>

        <div className="properties wrapper-item">
          <h1>Properties</h1>
          <p>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>
        {this.state.notFound ? (
          <EmptyData>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
              alt=""
            />
            <h1>Sorry!!! Empty folder</h1>
          </EmptyData>
        ) : (
          <div className="wrapper-cards wrapper-item">
            {this.state.data.map((item) => {
              return (
                <div key={item.id}>
                  <Hause data={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Client;
