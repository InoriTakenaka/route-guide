import React, { Component } from "react";
import Sidemenu from "./Sidemenu";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
        <hr />
        <Sidemenu />
        <div style={{ float: "left" }}></div>
      </div>
    );
  }
}
