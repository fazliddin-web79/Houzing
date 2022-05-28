import styled from "styled-components";

export const Search = styled.div`
  width: 920px;
  height: 409px;
  position: absolute;
  top: 146px;
  right: 224px;
  z-index: 1;
  background: white;
  box-shadow: 0 0 10px 10px rgb(1 1 1 / 10%);
  border-radius: 5px;
`;
export const WrapBg = styled.div`
  width: 100%;
  height: 74px;
  background-color: #f6f8f9;
`;
export const Container = styled.div`
  margin: ${(props) => (props.type === "margin" ? "0px 30px" : "30px")};
`;
export const ContainerInput = styled.div`
  margin-bottom: 20px;
  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: flex-start;
  }
  input {
    padding: 2px 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #0d263b;
    width: 195px;
    height: 44px;
    border: 1px solid #e6e9ec;
    border-radius: 2px;
    transition: all 0.1s;
    margin-right: 20px;
    ::placeholder {
      color: #0d263b;
    }
    :focus {
      border: 2px solid #0061df;
      outline: none;
    }
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-top: 15px;
    height: 44px;
    padding: 5px 30px 5px 30px;
    color: #ffffff;
    background-color: #0061df;
    border-radius: 4px;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;