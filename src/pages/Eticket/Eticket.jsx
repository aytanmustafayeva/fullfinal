import React from "react";
import "./Eticket.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

function Eticket() {
  return (
    <div className="eticketfootheader">
      <div className="header">
        <h3>E-ticket</h3>
      </div>
      <div className="eticketfoot">
        <div className="main">
          <div>
            <h5>What is E-ticket?</h5>
            <p>
              E-ticket is an electronic ticket. When you choose to order using
              E-ticket you can save time and make the ticket purchase process
              extremely convenient and simple.
            </p>
          </div>
          <div>
            <h5>Why this service is convenient?</h5>
            <p>
              E-ticket is saved in an electronic form (at the user's personal
              account). You can open and print your tickets as soon as you have
              completed your order. You can also retrieve your E-ticket at
              «Orders history» through your user's personal account on
              www.iticket.az and reprint it if necessary.
            </p>
          </div>
          <div>
            <h5>Time, Money and Time saving:</h5>
            <p>Save time on going to the ticket office</p>
            <p>Save money on courier services </p>
            <p>No need to wait for ticket delivery</p>
          </div>{" "}
          <h5>How can I order E-ticket?</h5>
          <p>
            Pay for the ticket with your bank card. After the online payment,
            your ticket will be automatically sent to your e-mail address used
            for registration. You can also go to your «Orders history» download
            and print out the ticket
          </p>
          <h5>How to exchange or refund E-ticket?</h5>
          <p>
            Terms and conditions on exchange or refunding of E-ticket is same as
            for the exchange or refunding of a standard ticket.
          </p>
          <h5>IMPORTANT:</h5>
          <p>
            Please note: E-tickets carry a barcode. Only one (1) spectator entry
            to the event per ticket barcode. If more than one copy of the same
            ticket is presented, only the first scan will be allowed entry.
          </p>
        </div>

        <div>
          <Footerdetail />
        </div>
      </div>
    </div>
  );
}

export default Eticket;
