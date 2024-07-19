import React from "react";
import Page from "../page/Page";
import Map from "../map/Map";
import LottieAnimation from '../LotteAnimation/LotteAnimation';
import "./ContactPage.css";

const ContactPage = (props) => {
  return (
    // <Page>
      <div className="contact-us-container"> 
         <h1>
        <span className="contact-title"> 
          Contact
        </span>
      </h1>
        <span className="contact-description">
        <p>
          If you'd like to work together on a new project or have any questions, 
          please get in touch - I'd love to hear from you!
        </p>
        </span>
        <div className="button-container">
          <div className="button-and-info">
            <a href="mailto:hello@stutpak.com" className="contact-button">SEND AN E-MAIL</a>
            <div className="contact-info-left">
              <br />
              <p><b>Andra de Vlieger</b></p>
              <p>Karel Mullerweg 41</p>
              <p>7425 BP Deventer, NL</p>
              <p>(no visiting address)</p>
              <br />
              <p><b><u>hello@stutpak.com</u></b></p>
              <br />
              <p><b><u>+31 6 8104 2370</u></b></p>
            </div>
          </div>
          <div className="button-and-info">
            <a href="tel:+31681042370" className="contact-button">CALL STUTPAK</a>
            <div className="contact-info-right">
              <br />
              <p><b>Account number:</b></p>
              <p>NL20 KNAB 0605 6333 04</p>
              <br />
              <p><b>COC - number:</b></p>
              <p>70698376</p>
              <br />
              <p><b>VAT - number:</b></p>
              <p>NL001390938B63</p>
            </div>
          </div>
        </div>
        <div className="animation-conatiner">
          <LottieAnimation />
        </div>
        
      </div>
    // </Page>
  );
};

export default ContactPage;
