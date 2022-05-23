import React, { Component } from "react";
import houseInput from "./icons/house-input.svg";
import statusInput from "./icons/Status-input.svg";
import priceInput from "./icons/price-input.svg";
import settingsInput from "./icons/setting-input.svg";
import searchBtn from "./icons/search-btn.svg";

class SearchPanel extends Component {
  render() {
    return (
      <div className="wrapper-item search-panel">
        <div className="input-content">
          <img src={houseInput} alt="" />
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
          />
        </div>
        <div className="input-content">
          <img src={statusInput} alt="" />
          <select>
            <option value="">Status</option>
          </select>
        </div>
        <div className="input-content">
          <img src={priceInput} alt="" />
          <select>
            <option value="">Price</option>
          </select>
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
    );
  }
}

export default SearchPanel;
