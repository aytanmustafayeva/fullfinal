import React from "react";
import "./About.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

const About = () => {
  return (
    <div className="about-footerdetails">
      <div className="allAbout">
        <div>
          <img
            src="http://demo.dawnthemes.com/ticketbox/wp-content/themes/ticketbox/assets/images/logo.png"
            alt="logo"
          ></img>
        </div>
        <br />
        <div className="About">
          <strong>TicketBox</strong> is a very elegantly designed WordPress
          theme built to create a website for Concert, Conferences, Events,
          Meetups, Sports and Exhibitions. The theme will help you to Sell
          conference ticket online by using Event Tickets Plus or you can also
          sell your event ticket using WooCommerce, to add daily schedules, to
          promote your speakers, to organize and create awesome Events and much
          more.
        </div>
        <br />
        <div className="Address">
          <strong>Address:</strong> 123 Street, Province, Country{" "}
        </div>
        <br />
        <div className="Phone">
          <strong>Phone:</strong> +1. 123 456 78 / 1. 111 222 333{" "}
        </div>
        <br />
        <div className="Email">
          <strong>Email:</strong> info@ticketbox.com
        </div>
      </div>

      <div>
        <Footerdetail />
      </div>
    </div>
  );
};

export default About;
