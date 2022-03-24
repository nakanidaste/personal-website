import React, { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../context";
import Crypto from "../../img/cryptoss.png";

const Product = ({ img, link }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p" style={{ border: darkMode && "2px solid white" }}>
      <div
        className="p-browser"
        style={{ backgroundColor: darkMode && "white" }}
      >
        <div
          className="p-circle"
          style={{ backgroundColor: darkMode && "black" }}
        ></div>
        <div
          className="p-circle"
          style={{ backgroundColor: darkMode && "black" }}
        ></div>
        <div
          className="p-circle"
          style={{ backgroundColor: darkMode && "black" }}
        ></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
