import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Client from "./components/client/client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Client />
    <Footer />
  </React.StrictMode>
);
