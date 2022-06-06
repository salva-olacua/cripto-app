import React from "react";
import searchLogo from "./search.svg";
import "./Input.css";

const Input = ({ onChange }) => {
  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="Filtrar por moneda"
        className="Input"
        onChange={onChange}
      />
      <img src={searchLogo} alt="search" />
    </div>
  );
};

export default Input;
