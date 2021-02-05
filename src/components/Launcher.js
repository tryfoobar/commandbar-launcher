import React, { Component } from "react";
import { osControlKey } from "./os.js";
import { AiOutlineSearch } from "react-icons/ai";

const Launcher = ({ text, style }) => {
  return (
    <div
      id="commandbar-user-launcher-component"
      className={"commandbar-user-launcher"}
      style={style || {}}
      onClick={() => {
        window?.CommandBar?.open();
      }}
    >
      <div className="commandbar-user-launcher__content">
        <div className="commandbar-user-launcher__prefix">
          <AiOutlineSearch />
          &nbsp; {text || "Find anything"}
        </div>
        <div className="commandbar-user-launcher__suffix">
          <span
            style={{ marginRight: 3 }}
            className="commandbar-user-launcher__tag"
          >
            {osControlKey()}
          </span>
          <span style={{ marginRight: 3 }}>+</span>
          <span className="commandbar-user-launcher__tag ">K</span>
        </div>
      </div>
    </div>
  );
};

export default Launcher;
