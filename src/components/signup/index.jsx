import React, { useState, useContext } from "react";
import { UserContext } from "../../context/context";
import { Button, Container, Input, Label, Title, WrapInput } from "./style";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const newUser = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  };
  const [user, setUser] = useState(newUser);
  const [goto, setGoto] = useState("/");
  const [users, setUsers] = useContext(UserContext);

  let haveUser = false;
  let emptyInput = false;
  let samePassword = true;
  const checkUser = () => {
    // eslint-disable-next-line
    users.map((v) => {
      if (v.username === user.username) {
        return (haveUser = true);
      }
    });
    if (!haveUser) {
      if (
        user.username === "" ||
        user.firstName === "" ||
        user.lastName === "" ||
        user.email === "" ||
        user.password === ""
      ) {
        emptyInput = true;
      }

      if (user.password !== user.rePassword) {
        samePassword = false;
      }
    }
    if (!haveUser && !emptyInput && samePassword) {
      setGoto("/signin");
    }
    return goto;
  };

  const sentMessage = () => {
    if (!haveUser && !emptyInput && samePassword) {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          email: user.email,
          name: user.firstName,
          password: user.password,
          surname: user.lastName,
          username: user.username,
        },
      ]);
    }
    if (haveUser) {
      alert("This username already exact");
    } else if (emptyInput) {
      alert("Which input is empty, please check it :)");
    } else if (!samePassword) {
      alert("Please, Enter the same password");
    }
  };
  return (
    <Container>
      <Title>Registration</Title>
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
        <Label>First name</Label>
        <Input
          type={"text"}
          onChange={(e) => {
            setUser({ ...user, firstName: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Label>Last name</Label>
        <Input
          type={"text"}
          onChange={(e) => {
            setUser({ ...user, lastName: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Label>Email</Label>
        <Input
          type={"email"}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Label>Password</Label>
        <Input
          type={"password"}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Label>Re-enter password</Label>
        <Input
          type={"password"}
          onChange={(e) => {
            setUser({ ...user, rePassword: e.target.value });
          }}
        />
      </WrapInput>
      <WrapInput>
        <Link to={checkUser}>
          <Button onClick={sentMessage}>Register</Button>
        </Link>
      </WrapInput>
    </Container>
  );
};

export default SignUp;
