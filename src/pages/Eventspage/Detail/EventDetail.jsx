import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import heart from "./heart.svg";
import cart from "./cart.svg";

const EventDetail = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});
  let id = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/events").then((res) => {
      const i = id.id;
      setEvent(res.data.data.find((x) => x._id == i));
    });
  }, []);

  return (
    <div className="event__card">
      <div className="event__card__image">
        <img src={event.eventImage} alt="" />
      </div>
      <div className="event__card__body">
        <h2>{event.location}</h2>
        <h2>{event.title}</h2>
        <h2>{event.price}AZN</h2>
        <div>
          <div>
            <button onClick={handleAddEvent(eventItem)}>
              <img className="cart" src={cart} alt="" />
            </button>
          </div>
          <div>
            <button>
              <img className="heart" src={heart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
