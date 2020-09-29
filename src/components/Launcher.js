import React, { Component } from "react";
import { osControlKey } from "./os.js";
import "./Launcher.css";

const Launcher = ({ text, style }) => {
  return (
    <div
      id="commandbar-launcher"
      className="commandbar-launcher"
      style={style || {}}
      onClick={() => {
        window?.CommandBar?.open();
      }}
    >
      <div>{text || `Find anything [${osControlKey()}+k]`}</div>
    </div>
  );
};

export default Launcher;
