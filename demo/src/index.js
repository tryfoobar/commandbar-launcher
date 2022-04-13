import React, { Component } from "react";
import { render } from "react-dom";

import Launcher from "../../src";
import "../../assets/index.css";

export default class Demo extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>In-app launcher component demo</h1>
        <div style={{ marginBottom: 10 }}>Default style</div>
        <Launcher />

        <div style={{ height: 25 }} />
        <div style={{ marginBottom: 10 }}>Updated styles example:</div>
        <Launcher
          style={{ fontWeight: 700, textAlign: "center", color: "black" }}
        />
        <div style={{ height: 25 }} />
        <div style={{ marginBottom: 10 }}>Updated text example:</div>
        <Launcher text={<div>Click to search in this app</div>} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
