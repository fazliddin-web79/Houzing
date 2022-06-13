import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Client from "../components/client/client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SignIn from "../components/signin";
import SignUp from "../components/signup";

export const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/products" component={Client} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Root;
