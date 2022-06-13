import styled from "styled-components";

export const Container = styled.div`
  height: 376px;
  width: 580px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin: 50px auto;
  padding: 20px;
`;
export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

export const WrapInput = styled.div`
  margin-top: 20px;
  height: 56px;
  position: relative;
`;
export const Label = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  padding: 2px 5px;
  z-index: 1;
  pointer-events: none;
  transition: 0.3s all;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: #0d263b;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  background: none;
  position: absolute;
  margin-top: 15px;
  padding: 5px 10px;
  outline: none;
  border: none;
  font-size: 16px;
  font-family: "Montserrat";
  border-bottom: 2px solid #e6e9ec;
  transition: 0.5s;
  :focus {
    border-bottom: 2px solid #0061df;
  }
`;

WrapInput.Checkbox = styled.input`
  height: 18px;
  width: 18px;
  transition: all 0.5s;
  cursor: pointer;
`;
WrapInput.Text = styled.h1`
  position: absolute;
  margin-left: 10px;
  display: inline-block;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
WrapInput.Forgot = styled.h3`
  position: absolute;
  right: 0;
  display: inline-block;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #0061df;
  text-decoration: underline;
`;
export const Button = styled.div`
  height: 44px;
  padding: 12px 40px;
  gap: 10px;
  position: absolute;
  width: 100%;
  background: #0061df;
  border-radius: 2px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  transition: all 0.01s;
  :active {
    transform: scale(0.99);
  }
`;
