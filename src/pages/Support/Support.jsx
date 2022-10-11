import React from "react";
import "./Support.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

function Support() {
  return (
    <div className="supportfooter">
      <div className="general-ticketbox">
        <div className="ticketbox">
          <h3>Support</h3>
          <br />
          If you were unable to resolve your query using our FAQ section, you
          can contact our Customer Services team directly by telephone +994 12
          493 33 77. You can also write to Customer Services via
          <strong> info@ticketbox.az.</strong> All questions are dealt with
          individually and we will respond as soon as possible.
        </div>

        <div className="customercare">
          <div>Customer Care operating hours</div>

          <div className="customerservice">
            Customer Service is available within 24 hours a day.
          </div>
        </div>
      </div>
      <div className="footerdetail">
        <Footerdetail />
      </div>
    </div>
  );
}

export default Support;
