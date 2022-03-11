import React from "react";
import "./styles.css";
import SvgArrowBack from "../../assets/icons/arrow_back_white.svg";

export default function Header({ Label, to}) {
  return (
    <div className="navbar">
    <h2>{Label}</h2>
    <div style={{float: "right"}}>
     <a href={to}> <img src={SvgArrowBack} alt="Back"></img></a>
     </div>
  {/*<a href="#news">News</a>
  <a href="#contact">Contact</a> */}
  </div>
  );
}
