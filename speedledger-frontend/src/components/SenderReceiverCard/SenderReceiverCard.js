import React from "react";
import "./SenderReceiverCard.css";

const SenderReceiverCard = props => (
  <div className="infoCard">
    <div className="infoCard-sender">
      <p className="infoCard-label">Sender information</p>
      <p className="infoCard-name">{props.invoice.sender.name}</p>
      <p className="infoCard-street">{props.invoice.sender.street}</p>
      <p className="infoCard-address">
        {props.invoice.sender.city} {props.invoice.sender.postalcode}
      </p>
    </div>
    <div className="infoCard-receiver">
      <p className="infoCard-label">Receiver information</p>
      <p className="infoCard-name">{props.invoice.receiver.name}</p>
      <p className="infoCard-street">{props.invoice.receiver.street}</p>
      <p className="infoCard-address">
        {props.invoice.receiver.city} {props.invoice.receiver.postalcode}
      </p>
    </div>
  </div>
);

export default SenderReceiverCard;
