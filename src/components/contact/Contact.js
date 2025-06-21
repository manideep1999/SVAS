import React from "react";
import "./Contact.css";
import SectionHeader from "../common/section/SectionHeader";
import ContactSection from "./ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contactForm") {
      const el = document.getElementById("contactForm");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <div className="section">
      <SectionHeader
        imageUrl="./img/contact/contact-banner1.png"
        headerText="Contact Us"
        alt="Contact banner"
      ></SectionHeader>

      <div className="container-fluid">
        <ContactSection></ContactSection>
      </div>
    </div>
  );
}

export default Contact;
