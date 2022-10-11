import "./Eventcard.css";
import React from "react";

const Eventcard = ({ event }) => {
  return (
    <div className="event__card">
      <div className="event__card__image">
        <img src={event.eventImage} alt="" />
      </div>
      <div className="event__card__body">
        <h2>{event.location}</h2>
      </div>
    </div>
  );
};

export default Eventcard;
