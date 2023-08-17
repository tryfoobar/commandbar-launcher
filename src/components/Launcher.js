import React from "react";
import { osControlKey, isMobile } from "./os.js";
import { AiOutlineSearch } from "react-icons/ai";

const Launcher = ({ text, style }) => {
  return (
    <div
      id="commandbar-user-launcher-component"
      className={"commandbar-user-launcher"}
      style={
        style || {
          fontSize: "14px",
          minWidth: 200,
          marginRight: 15,
          marginLeft: 15,
          width: "inherit",
          marginBottom: 10,
          border: "1px solid #DFDFE2",
          boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          fontWeight: "500",
          color: "#A2A2A9",
        }
      }
      onClick={() => {
        window?.CommandBar?.open();
      }}
    >
      <div className="commandbar-user-launcher__content">
        <div className="commandbar-user-launcher__prefix">
          <AiOutlineSearch />
          &nbsp; {text || "Find anything"}
        </div>
        {!isMobile() && (
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
        )}
      </div>
    </div>
  );
};

export default Launcher;
