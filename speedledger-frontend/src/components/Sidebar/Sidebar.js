import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <img
      className="sidebar-logo"
      src="https://25po1frvwfa2rxgqp2c93l11-wpengine.netdna-ssl.com/wp-content/themes/speedledger/images/logo-white.svg"
    />
    <div className="sidebar-desktop">
      <a className="sidebar-desktop-link" href="#">
        <i className="material-icons">account_balance</i>
        Overview
      </a>
      <a className="sidebar-desktop-link selected" href="#">
        <i className="material-icons">library_books</i>
        Invoices
      </a>
      <a className="sidebar-desktop-link" href="#">
        <i className="material-icons">featured_play_list</i>
        Reports
      </a>
      <a className="sidebar-desktop-link" href="#">
        <i className="material-icons">call</i>
        Assistance
      </a>
    </div>
    <i className="sidebar-mobile-menu material-icons">menu</i>
  </nav>
);

export default Sidebar;
