import React, { useState, useContext } from "react";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { UserContext } from "../../context/context";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const userValue = {
    username: "",
    password: "",
  };
  const [goto, setGoto] = useState("/signin");
  const [user, setUser] = useState(userValue);
  const [users] = useContext(UserContext);
  const onStart = () => {
    users.forEach((v) => {
      if (v.username === user.username && v.password === user.password) {
        setGoto("/products");
      }
    });
    return goto;
  };
  const checking = () => {
    if (goto === "/signin") {
      alert("Something is wrong");
    }
    console.log(users);
  };
  return (
    <Container>
      <Title>Sign in</Title>
      <WrapInput>
        <Label>Username</Label>
        <Input
          type={"text"}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Label>Password</Label>
        <Input
          type={"text"}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <WrapInput.Checkbox type="checkbox" />
        <WrapInput.Text>Remember me</WrapInput.Text>
        <WrapInput.Forgot>Forgot</WrapInput.Forgot>
      </WrapInput>
      <WrapInput>
        <Link to={() => onStart()}>
          <Button onClick={checking}>Login</Button>
        </Link>
      </WrapInput>
    </Container>
  );
};

export default SignIn;
