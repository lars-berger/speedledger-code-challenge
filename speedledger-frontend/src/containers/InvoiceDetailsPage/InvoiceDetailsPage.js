import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";
import InvoicesCard from "../../components/InvoicesCard/InvoicesCard";
import SenderReceiverCard from "../../components/SenderReceiverCard/SenderReceiverCard";
import InvoiceDetails from "../../components/InvoiceDetails/InvoiceDetails";
import "./InvoiceDetailsPage.css";

class InvoiceDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      invoiceId: window.location.pathname.split("/")[1]
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.state)
    if (!this.props.invoices) this.props.getInvoices();
  }

  render() {
    return <div className="grid-container">
        <Sidebar />
        <div className="dashboard-content">
          <TopNav />
          <div className="dashboard-content-wrapper">
            <h1>Invoice details</h1>
            <div className="thin-underline" />
            
            {this.props.invoices && <section className="invoice">
                <SenderReceiverCard invoice={this.props.invoices.filter(e => e.invoiceId == this.state.invoiceId)[0]} />
                <InvoiceDetails invoice={this.props.invoices.filter(e => e.invoiceId == this.state.invoiceId)[0]} />
              </section>}

            <h2>Related transactions</h2>
            <div className="thin-underline" />
            {this.props.invoices && <InvoicesCard invoices={this.props.invoices.slice(0, 3)} />}
          </div>
        </div>
      </div>;
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
)(InvoiceDetailsPage);
