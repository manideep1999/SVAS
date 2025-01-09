import React from "react";
import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";
import { FaPhoneVolume, FaLocationDot, FaEnvelope } from "react-icons/fa6";

function ContactList() {
  return (
    <section className="container contact-page">
      <h2>GET IN TOUCH</h2>
      <p>
        {" "}
        We are here to guide you on your journey of inner peace. Feel free to
        reach out to us for any questions, guidance, or support regarding
        meditation.{" "}
      </p>
      <ul class="list-unstyled">
        <li>
          <div className="contact-info">
            <span className="contact-icon">
              <FaPhoneVolume />
            </span>
            <div className="contact-details">
              <h3>Phone:</h3>
              <p>
                {" "}
                <a href="tel:+1562.567.SVAS (7827)" className="contact-link">
                  {" "}
                  (+1) 562.567.SVAS (7827)
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="contact-info">
            <span className="contact-icon">
              <FaLocationDot />
            </span>
            <div className="contact-details">
              <h3> Our Sanctuary:</h3>
              <p>
                <a
                  href="https://www.google.com/maps/place/Sri+Sai+Vani+Satsang+Ashram/@17.2952039,78.2406254,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbc17757ac0273:0xda9baab424214b4b!8m2!3d17.2951988!4d78.2432003!16s%2Fg%2F11ff0sftnx?entry=ttu"
                  className="contact-link"
                >
                  76WV+37G, Kanakamamidi, Telangana 501504, India
                </a>
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="contact-info">
            <span className="contact-icon">
              <FaEnvelope />
            </span>
            <div className="contact-details">
              <h3> Email:</h3>
              <p>
                <a
                  href="mailto:svasformeditation@gmail.com"
                  className="contact-link"
                >
                  svasformeditation@gmail.com
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default ContactList;
