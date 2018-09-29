import React from "react";
import moment from "moment";
import "./InvoiceDetails.css";

const InvoiceDetails = props => (
  <div className="invoiceDetails">
    <div className="invoiceDetails-wrapper">
      <p className="invoiceDetails-label">Invoice ID</p>
      <h2 className="invoiceDetails-title">{props.invoice.invoiceId}</h2>
    </div>
    <div className="invoiceDetails-wrapper">
      <p className="invoiceDetails-label">Account</p>
      <h2 className="invoiceDetails-title">{props.invoice.account}</h2>
    </div>
    <div className="invoiceDetails-wrapper">
      <p className="invoiceDetails-label">Amount</p>
      <h2 className="invoiceDetails-title">{props.invoice.totalPrice}</h2>
    </div>
    <div className="invoiceDetails-wrapper">
      <p className="invoiceDetails-label">Date</p>
      <h2 className="invoiceDetails-title">
        {moment(props.invoice.invoiceDate).format("MMMM Do, YYYY")}
      </h2>
    </div>
  </div>
);

export default InvoiceDetails;
