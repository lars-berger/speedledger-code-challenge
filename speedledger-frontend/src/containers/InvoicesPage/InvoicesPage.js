import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";
import InvoicesCard from "../../components/InvoicesCard/InvoicesCard";
import "./InvoicesPage.css";

class InvoicesPage extends Component {
  componentDidMount() {
    this.props.getInvoices();
  }

  render() {
    return (
      <div className="grid-container">
        <Sidebar />
        <div className="dashboard-content">
          <TopNav />
          <div className="dashboard-content-wrapper">
            <h1>Invoices</h1>
            <div className="thin-underline" />

            <div className="card-header">
              <p className="card-header-id">Invoice ID</p>
              <p className="card-header-sender">Sender</p>
              <p className="card-header-receiver">Receiver</p>
              <p className="card-header-amount">Amount</p>
              <p className="card-header-date">Date</p>
            </div>

            <div className="divider" />

            {this.props.invoices && (
              <InvoicesCard invoices={this.props.invoices}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getInvoices: () => {
    dispatch({
      type: "GET_INVOICES",
      url: "/invoices"
    });
  }
});

const mapStateToProps = store => ({
  invoices: store.invoices
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoicesPage);
