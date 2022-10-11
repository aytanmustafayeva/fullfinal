import React from "react";
import "./Footerdetail.css";

function Footerdetail() {
  return (
    <div>
      <div class="list-group">
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="About"
        >
          About Us
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="contacts"
        >
          Contacts
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="faq"
        >
          FAQ
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="support"
        >
          Support
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="termsconditions"
        >
          Terms and Contidions
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="refundexchange"
        >
          Refund and exchange
        </a>
        <a
          type="button"
          class="list-group-item list-group-item-action"
          href="privacy"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footerdetail;
