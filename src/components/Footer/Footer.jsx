import "./Footer.css";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-part-1">
        <div className="footer-col-1">
          <img src={logo} alt="footer__image" />
          <p>Support service</p>
          <p className="bold">+994 12 493 33 77</p>
        </div>
        <div className="footer-col-2">
          <p className="bold">Information</p>
          <p>
            <a href="faq">FAQ</a>
          </p>
          <p>
            <a href="support">Support</a>
          </p>
          <p>
            <a href="termsconditions">Terms and Conditions</a>
          </p>
          <p>
            <a href="privacy">Privacy Policy</a>
          </p>
        </div>
        <div className="footer-col-3">
          <p className="bold">TicketBox</p>
          <p>
            <a href="">About us</a>
          </p>
          <p>
            <a href="">Point of Sales</a>
          </p>
          <p>
            <a href="">Venues</a>
          </p>
          <p>
            <a href="contacts">Contacts</a>
          </p>
        </div>
        <div className="footer-col-4">
          <p className="bold">Security</p>
          <p>
            All payments are protected by 3D Secure from Visa, Visa Electron,
            Maestro and MasterCard
          </p>
        </div>
      </div>
      <div className="footer-part-2">
        <p>COPYRIGHT 2022 © ALL RIGHTS RESERVED. DESIGN BY IATC TEAM.</p>
      </div>
    </div>
  );
}

export default Footer;
