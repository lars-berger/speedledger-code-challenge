import React from "react";
import "./TopNav.css";

const TopNav = () => (
  <div>
    <aside className="topnav">
      <a className="topnav-link" href="#">
        <i className="material-icons">inbox</i>
      </a>
      <a className="topnav-link" href="#">
        <i className="material-icons">notifications_none</i>
      </a>
      <p className="topnav-username">Lars Berger</p>
      <a className="topnav-link" href="#">
        <i class="material-icons">keyboard_arrow_down</i>
      </a>
    </aside>
    <div className="divider" />
  </div>
  
);

export default TopNav;
