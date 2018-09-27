import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";
import "./InvoicesPage.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Sidebar />
        <div className="dashboard-content">
          <TopNav />
          <div className="dashboard-content-wrapper">
            <h1>Invoices</h1>
            <div className="orange-underline" />
            <p>fdsfdsafdsafdsafdsio</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
