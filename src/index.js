import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Client from "./components/client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SearchPanel from "./components/searchPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <SearchPanel />
    <Client />
    <Footer />
  </React.StrictMode>
);
