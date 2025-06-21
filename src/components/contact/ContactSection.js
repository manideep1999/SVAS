import React from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="container contact-page-container">
      <div className="row">
        <div className="col-md-6 ">
          <ContactList></ContactList>
        </div>
        <div className="col-md-6 " id="contactForm">
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
