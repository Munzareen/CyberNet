import React from "react";
import mail from "../../../assets/icons/mail.svg";
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p>© Cybernet {new Date().getFullYear()}</p>
      <a href="mailto:help@cyberNet.com" className="footer_email">
        <img src={mail} alt="mail-icon" />
        help@cyberNet.com
      </a>
    </div>
  );
};

export default Footer;
