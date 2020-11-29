import React, { Component } from "react";
import { osControlKey } from "./os.js";
import { AiOutlineSearch } from "react-icons/ai";
import { css } from "@emotion/css";

const tagStyle = {
  padding: "3px 5px",
  backgroundColor: "rgba(170,170,180)",
  color: "white",
  borderRadius: 5,
};

const Launcher = ({ text, style }) => {
  return (
    <div
      id="commandbar-user-launcher-component"
      className={css({
        minWidth: 200,
        width: 250,
        position: "relative",
        padding: "4px 12px",
        color: "#8792az",
        backgroundColor: "#f7fafc",
        borderRadius: "4px",
        boxShadow: "4px 5px 10px 0px rgba(0, 0, 0, 0.16)",
        fontSize: "13px",
        transition: "all 0.3s ease-in-out",
        lineHeight: 2,
        cursor: "pointer",
        "&:hover": {
          boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.16)",
          color: "#697386",
          transition: "all 0.3s ease-in-out",
        },
      })}
      style={style || {}}
      onClick={() => {
        window?.CommandBar?.open();
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineSearch />
          &nbsp; {text || "Find anything"}
        </div>
        <div style={{ fontSize: 11 }}>
          <span style={{ marginRight: 3, ...tagStyle }}>{osControlKey()}</span>
          <span style={{ marginRight: 3 }}>+</span>
          <span style={tagStyle}>K</span>
        </div>
      </div>
    </div>
  );
};

export default Launcher;
