import React from "react";
import "./FAQ.css";
import { useState } from "react";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h5>{item.question}</h5>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="footerdetail">
        <Footerdetail />
      </div>
    </div>
  );
}

export default FAQ;

const data = [
  {
    question: "1. Is it enough to print an E-Ticket out for the event entry?",
    answer:
      "Yes, it is enough to print an e-ticket out, which is sent to your e-mail after an online purchase, or to show it on your mobile phone. E-tickets are not being delivered or exchanged with paper tickets.",
  },

  {
    question: "2. Where can I purchase a ticket by cash payment method?",
    answer:
      "You can get tickets for all upcoming events from city Ticket Sales Points, “ASAN Service”, at the shopping centers “28 Mall”, “Ganjlik Mall”, as well as at the Ticket Sales Point of the Heydar Aliyev Palace and at the box offices of theaters. Please follow the link to get detailed information about Ticket Sales Points",
  },
  {
    question: "3. Tickets delivery?",
    answer:
      "The delivery service is carried out in Baku within 4-5 working days from the moment the event goes on sale up to 5 days before the event, weekends excluded. The delivery fee is 3 AZN. In the situation an event is cancelled or does not take place, the delivery service fee will not be refunded",
  },
  {
    question:
      "4. What is the age range of purchasing separate ticket for minors attending kids’ events?",
    answer:
      "The delivery service is carried out in Baku within 4-5 working days from the moment the event goes on sale up to 5 days before the event, weekends excluded. The delivery fee is 3 AZN. In the situation an event is cancelled or does not take place, the delivery service fee will not be refunded",
  },
  {
    question:
      "5. What is the age range for minors to attend events intended for adults?",
    answer:
      "Entrance for minors under the age of 6 is not allowed in events intended for adults. Children over the age of 6 are admitted with a separate ticket if accompanied by an adult.",
  },
  {
    question: "6. Is it necessary to fill in the 'Promo code' section?",
    answer:
      "No, the 'Promo code' section is filled in only when the organizers offer a certain discount on their event. 'Promo code' must be provided by the organizers of the event or iTicket.AZ.",
  },
  {
    question: "7. Why should I register my details?",
    answer:
      "Registering your details will allow us to keep you updated with ticketing information, including ticket availability and updates on any orders you may have.",
  },
  {
    question: "8. What if my tickets get lost, stolen, damaged?",
    answer:
      "Depending on the event, paper tickets in case of loss or theft can be restored by deducting 15% of the ticket price. E-tickets can be downloaded again from your online account. Please note that exposure to water, dirt, heat or sunlight may damage your ticket. Should any part of a ticket become illegible, it may result in the holder being refused admission to the venue.",
  },
  {
    question: "9. Can I get a refund if there is a need to return tickets?",
    answer:
      "Please choose your tickets carefully. Payment will be processed immediately after tickets order confirmation. When returning or exchanging a ticket 48 hours or earlier before the event, 30% of the ticket price will be charged. Tickets cannot be returned or exchanged on the day of the event. The ticket resale is prohibited and may result in invalidation of tickets.",
  },
  {
    question:
      "10. Can I change or return my tickets if the event is postponed, changed or canceled?",
    answer:
      "If the event is postponed or the venue is changed, your tickets will be valid for the new time or new venue. If you are not satisfied with the new date or location, you can return your tickets and are entitled to a full refund. If the event is canceled, your payment will be refunded.",
  },
  {
    question: "11. I live outside Azerbaijan. Can I still buy tickets?",
    answer:
      "Yes, you can. Tickets can be purchased anywhere and anytime online through our iTicket.AZ website or mobile app.",
  },
  {
    question: "12. What do I need to enter the venue?",
    answer:
      "Spectators must have a valid ticket.Ticket Holders under the age of 16 can only attend the event when accompanied by an adult (18+) with a separate ticket and a valid ID.",
  },
  {
    question: "13. Is a COVID-19 passport required to enter the event?",
    answer:
      "People over the age of 18 may attend events by presenting a COVID-19 Vaccination Certificate, a COVID-19 Immunity Certificate, or a COVID-19 Contraindication Certificate. Spectators without a COVID-19 passport are not allowed to cultural and sports events and tickets are non-refundable.",
  },
];
