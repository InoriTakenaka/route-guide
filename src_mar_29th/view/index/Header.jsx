import React from "react";
import style from "./header.module.css";
import { Route, Routes, Link } from "react-router-dom";
export default function header() {
  return (
    <div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <Link to="#">React Router Demo</Link>
          </li>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/user">User Center</Link>
          </li>
          <li>
            <Link to="/news">News</Link>           
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
