import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./InvoicesCard.css";

const InvoicesCard = props => (
  <section className="card">
    {props.invoices.map(e => {
      return (
        <div key={e.invoiceId}>
          <div className="card-item">
            <p className="card-item-id">{e.invoiceId}</p>
            <p className="card-item-sender">{e.sender.name}</p>
            <p className="card-item-receiver">{e.receiver.name}</p>
            <p className="card-item-amount">{e.totalPrice} SEK</p>
            <p className="card-item-date">
              {moment(e.invoiceDate).format("MMMM Do, YYYY")}
            </p>
            <div className="card-item-link">
              <Link to={`/${e.invoiceId}`}>View details</Link>
            </div>
          </div>
        </div>
      );
    })}
  </section>
);

export default InvoicesCard;
