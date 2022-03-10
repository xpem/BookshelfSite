import React from "react";
import "./styles.css";
import SvgArrowBack from "../../assets/icons/arrow_back_white.svg";

export default function Header({ Label, to, ...rest }) {
  return (
    <div class="navbar">
    <h2>{Label}</h2>
     <a href={to} style={{float: "right"}}> <img src={SvgArrowBack} alt="Back"></img></a>
  
  {/*<a href="#news">News</a>
  <a href="#contact">Contact</a> */}
  </div>
  );
}
