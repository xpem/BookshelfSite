import React, { InputHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import SvgArrowBack from "../../assets/icons/arrow_back.svg";
import "./styles.css";

//arrowback to
function LinkBack({ loading, to }) {
  return (    
    <Link className="linkArrowBack" to={to} disabled={loading}>
      <img src={SvgArrowBack} alt="Back"></img>
    </Link>
  );
}

export default LinkBack;
