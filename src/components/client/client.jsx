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
  Button,
} from "./clientStyle";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      dates: data,
      notFound: false,
      likedSearch: false,
      clearSearch: true,
      onSelect: {
        zip: "",
        city: "",
        region: "",
        country: "",
        bed: "",
        field: "",
        before: "",
        after: "",
      },
    };
  }
  render() {
    const onChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ clearSearch: false, onSelect: { [name]: value } });
      const res = data.filter((item) =>
        `${item[name]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ dates: res });
      res.length === 0
        ? this.setState({ notFound: true })
        : this.setState({ notFound: false });
    };
    const sortMax = ({ target }) => {
      const { value } = target;
      if (value.length === 0) {
        this.setState({ dates: data, notFound: false, clearSearch: true });
      } else {
        const max = parseInt(value);
        this.setState({ clearSearch: false, onSelect: { ofter: max } });
        const res = data.filter((item) => item.after <= max);
        this.setState({ dates: res });
        res.length === 0
          ? this.setState({ notFound: true })
          : this.setState({ notFound: false });
      }
    };
    const sortMin = ({ target }) => {
      const { value } = target;
      if (value.length === 0) {
        this.setState({ dates: data, notFound: false, clearSearch: true });
      } else {
        const min = parseInt(value);
        this.setState({ clearSearch: false, onSelect: { before: min } });
        const res = data.filter((item) => item.after >= min);
        this.setState({ dates: res });
        res.length === 0
          ? this.setState({ notFound: true })
          : this.setState({ notFound: false });
      }
    };
    const liked = (id) => {
      const res = this.state.dates.map((item) => {
        return item.id === id ? { ...item, isliked: true } : item;
      });
      this.setState({ dates: res });
    };
    const sortLiked = () => {
      if (!this.state.likedSearch) {
        const res = this.state.dates.filter((item) => item.isliked === true);
        this.setState({ dates: res, likedSearch: true });
      } else this.setState({ dates: data, likedSearch: false });
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
            <button>
              <img src={settingsInput} alt="" />
              Advanced
            </button>
            <button
              onClick={() => {
                this.setState({
                  searching: !this.state.searching,
                  clearSearch: true,
                  dates: data,
                  notFound: false,
                });
              }}
            >
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
                      value={
                        !this.state.clearSearch
                          ? this.state.onSelect.country
                          : ""
                      }
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Region"
                      name="region"
                      value={
                        !this.state.clearSearch
                          ? this.state.onSelect.region
                          : ""
                      }
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={
                        !this.state.clearSearch ? this.state.onSelect.city : ""
                      }
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Zip code"
                      name="zip"
                      value={
                        !this.state.clearSearch ? this.state.onSelect.zip : ""
                      }
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
                      value={
                        !this.state.clearSearch ? this.state.onSelect.bed : ""
                      }
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      type="text"
                      placeholder="Size"
                      name="field"
                      value={
                        !this.state.clearSearch ? this.state.onSelect.field : ""
                      }
                      onChange={(e) => onChange(e)}
                    />
                    <input type="text" placeholder="Sort" />
                  </div>
                </ContainerInput>
                <ContainerInput>
                  <h2>Price</h2>
                  <div>
                    <input
                      type="number"
                      placeholder="Min price"
                      value={
                        !this.state.clearSearch
                          ? this.state.onSelect.before
                          : ""
                      }
                      onChange={(e) => sortMin(e)}
                    />
                    <input
                      type="number"
                      placeholder="Max price"
                      value={
                        !this.state.clearSearch ? this.state.onSelect.after : ""
                      }
                      onChange={(e) => sortMax(e)}
                    />
                  </div>
                </ContainerInput>
              </Container>
              <hr />
              <WrapBg>
                <Container type="margin">
                  <BtnWrap>
                    <button
                      onClick={() => {
                        this.setState({
                          clearSearch: true,
                          notFound: false,
                          dates: data,
                        });
                      }}
                    >
                      Clear search Panel
                    </button>
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
          <Button onClick={sortLiked}>Sort liked</Button>
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
            {this.state.dates.map((item) => {
              return (
                <div key={item.id}>
                  <Hause data={item} onClick={liked} />
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
