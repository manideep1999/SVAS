import React, { useState } from "react";
import "./ContactForm.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Regular expression to check if the email ends with @gmail.com
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const validateForm = () => {
    let newErrors = {};

    if (!name || name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!email || !gmailPattern.test(email)) {
      newErrors.email = "Enter a valid gmail address.";
    }

    if (!subject || subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    }

    if (!phone || !/^\d{10,15}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits).";
    }

    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    const confirmed = window.confirm(
      "Do you want to open your default email client to send this message?"
    );
    if (confirmed) {
      //call to emai lfunction
      const mailtoLink = `mailto:prerana.za@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}`
      )}`;
      console.log("opening mail");
      // Opening the email client with the mailto link
      window.location.href = mailtoLink;
      // Reset form after submission
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section className="container contact-form-container">
      <h2 className="display-2 fw-normal">WRITE US</h2>
      <p>
        Whether you want to start your spiritual journey or want to share your
        mediation expereinces we are just a message away. Please feel free to
        send us a message.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        {errors.subject && <p className="error">{errors.subject}</p>}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="btn btn-width btn-warning">
          Send Your Message
        </button>
      </form>
    </section>
  );
}
export default ContactForm;
