import React from "react";
import "./TermsConditions.css";
import Footerdetail from "../../components/Footerdetail/Footerdetail";

function TermsConditions() {
  return (
    <div className="gtermsheaderfoot">
      <div>
        <div className="header">
          <h3>Terms and Conditions</h3>{" "}
        </div>
        <div className="gtermsfoot">
          {" "}
          <div className="gterms">
            <div>
              <h5>General Terms and Conditions</h5>
              <p>
                By using the TicketBox.az website ("Site"), you expressly agree
                to be bound by the following "Terms" and all applicable laws and
                regulations governing the Site based on Azerbaijan Republic
                legislature.
              </p>
            </div>
            <br />
            <div>
              <h5> Trademarks</h5>
              <p>
                Ticketbox.az logos found on this site are registered trademarks
                of TicketBox.az and may not be used at any time under any
                circumstances save with the prior written permission of
                TicketBox.az.{" "}
              </p>
            </div>
            <br />
            <div>
              <h5>Copyright</h5>
              <p>
                The content and software on this site is the property of
                TicketBox.az and is protected by copyright. Except as expressly
                stated in the limited licence provision of these terms and
                conditions, TicketBox.az does not grant any express or implied
                right to you under any of its trademarks, copyrights or other
                proprietary information.
              </p>
            </div>
            <br />
            <div>
              <h5>Permitted Use</h5>
              <p>
                You agree that you are only authorised to visit, view and to
                retain a copy of pages of this Site for your own personal use,
                and that you shall not duplicate, download, publish, modify or
                otherwise distribute the material on this site for any purpose
                other than to review event and promotional information, for
                personal use, or to purchase tickets or merchandise for your
                personal use, unless otherwise specifically authorised by
                TicketBox.az to do so.
              </p>
            </div>
            <br />
            <div>
              <p>
                <strong>
                  {" "}
                  Note: Illegal and/or unauthorised uses of the Site, including,
                  but not limited to, unauthorised ticket sales, or unauthorised
                  use of any robot, spider or other automated device on the
                  site, may be investigated and appropriate legal action taken.{" "}
                </strong>
              </p>
            </div>
          </div>
          <div>
            <Footerdetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
