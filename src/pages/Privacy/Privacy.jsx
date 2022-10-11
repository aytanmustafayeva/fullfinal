import React from "react";
import "./Privacy.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

function Privacy() {
  return (
    <div className="privacyfootheader">
      <div className="header">
        <h3>Privacy Policy</h3>
      </div>
      <div className="privacyfoot">
        <div className="main">
          <div>
            <h5>I. How we use personal information</h5>
            <p>
              Your personal information is only shared with iTicket.az for the
              particular event for which you are buying tickets in accordance
              with this Privacy Policy and iTicket.az's contractual relationship
              with the Promoter or Venue. Your personal information is used by
              us to contact you via phone or by email when necessary in
              connection with transactions entered by you on the site. We will
              not use your personal information for communications not
              associated with your transactions without your explicit consent.
              We will not pass your data to third parties unless you provide
              your explicit consent.
            </p>
          </div>
          <div>
            <h5>II. Social network plug-ins</h5>
            <p>
              Our web site hosts social plug-ins for the many social networks.
              When a web page containing a social plug-in (such as the
              ‘Like/Recommend’) is accessed, the user’s browser connects to the
              social networks servers and the content required for the social
              plug-ins is downloaded. When the user is logged into their social
              network account, the social network may be able to relate the
              visit to that page to the user’s social network account. If the
              user does not wish this information to be sent to the social
              network, he or she must log out of their social network before
              visiting our web site.
            </p>
          </div>
          <div>
            <h5>III. Web browser cookies</h5>
            <p>
              Our site may use "cookies" to enhance user experience. User's web
              browser places cookies on their hard drive for record-keeping
              purposes and sometimes to track information about them. User may
              choose to set their web browser to refuse cookies, or to alert you
              when cookies are being sent. If they do so, note that some parts
              of the site may not function properly.
            </p>
          </div>{" "}
        </div>

        <div>
          <Footerdetail />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
