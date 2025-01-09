import React from "react";
import "./Contact.css";
import SectionHeader from "../common/section/SectionHeader";
import ContactSection from "./ContactSection";

function Contact(props) {
  return (
    <div class="section">
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
