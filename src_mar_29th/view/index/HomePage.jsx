import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Sidemenu from "./Sidemenu";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
        <hr />
        <Sidemenu />
        {/* 5版本中用于放置子路由组件的容器，6版本中，这个容器的作用被<Outlet>组件所取代 */}
        <Outlet />
      </div>
    );
  }
}
