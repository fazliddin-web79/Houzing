import styled from "styled-components";

export const CardStyled = styled.div`
  margin-top: 20px;
  height: 430px;
  width: 380px;
  box-shadow: 0 0 2px 2px rgba(1, 1, 1, 0.05);
  transition: all 0.3s;
  border-radius: 5px;
  :hover {
    box-shadow: 0 10px 20px 8px rgba(1, 1, 1, 0.01);

    transform: scale(1.01);
  }
  .card-img {
    width: 100%;
    height: 220px;
    padding-top: 22px;
    background-size: cover;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background-position: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .person-img {
    display: inline-block;
    margin-top: 154px;
    margin-left: 302px;
  }
  .person-img img {
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 2px 2px rgba(1, 1, 1, 0.08);
  }

  .wrapper.img-btns {
    display: flex;
    justify-content: space-between;
  }
  .img-btns button {
    border: none;
    height: 25px;
    padding: 5px 12px;
    border-radius: 3px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: #fff;
    text-transform: uppercase;
  }
  .wrapper.img-btns button:first-child {
    background-color: #0061df;
  }
  .wrapper.img-btns button:last-child {
    background-color: #0d263b;
  }
  .wrapper {
    margin: 0 auto;
    width: 90%;
  }
  .card-feature {
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  .card-feature div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .card-feature div p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .card-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    margin-top: 20px;
  }
  .card-title h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    margin-bottom: 4px;
  }
  .card-title p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
  .card-price {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3:last-child {
      font-size: 16px;
      font-weight: 600;
      font-family: "Montserrat";
      color: #0d263b;
    }
    h3:first-child {
      margin-bottom: 10px;
      text-decoration-line: line-through;
      color: #696969;
      font-size: 12px;
      font-family: "Montserrat";
    }
  }
  .buys-card {
    width: 50px;
  }
  .buys-card h2 {
    font-size: 1.72rem;
    color: #696969;
    font-style: italic;
  }
  .card-control-btn {
    height: 35px;
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
  .is-buy {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
  .is-buy img:hover {
    cursor: pointer;
  }
  .is-buy img:first-child {
    width: 10px;
    margin-left: 25px;
    margin-bottom: 2px;
  }
  .is-buy img:last-child {
    width: 10px;
    margin-top: 2px;
    margin-right: 25px;
  }
  .is-like {
    width: 35px;
    transition: all 0.2s;
  }
  .is-like:hover {
    cursor: pointer;
  }
`;
