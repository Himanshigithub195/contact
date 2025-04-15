import React, { useState } from 'react';

const ContactForm = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOverlay(true);
    e.target.reset();
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="contact-form">
        <h2>Get In Touch</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Your Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write Your Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div
        id="thankYouOverlay"
        className={`thank-you-overlay ${showOverlay ? 'show' : ''}`}
      >
        <div className="thank-you-card">
          <h2>Thank You!</h2>
          <p>
            Your message has been successfully submitted. We will get back to you
            soon!
          </p>
          <button className="close-btn" onClick={closeOverlay}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="hero-image">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Sri Satya Sai University of Technology and Medical Sciences, Sehore</p>
        </div>
      </div>
      <div className="contact-title">
        <hr className="blue-line" />
        <h2>CONTACT US</h2>
      </div>
      <div className="contact-info-cards">
        <div className="info-card">
          <span className="icon">📍</span>
          <h3>Address</h3>
          <p>
            Opp. Oilfed Plant, Bhopal-Indore Road
            <br />
            Sehore (M.P.), Pin - 466001
          </p>
        </div>
        <div className="info-card">
          <span className="icon">✉️</span>
          <h3>E-Mail</h3>
          <p>
            info@sssutms.in
            <br />
            Fax: +91-07562-220209 | 07562-220204 | 07562-220205
            <br />
            292205 | 07562-220740 | 07562-220720
          </p>
        </div>
        <div className="info-card">
          <span className="icon">⏰</span>
          <h3>Office Time</h3>
          <p>
            Mon - Sat 10:00 am - 5:00 pm
            <br />
            Visit us - www.sssutms.ac.in
          </p>
        </div>
      </div>
      <div className="contact-details">
        <div className="container">
          <div className="contact-content">
            <ContactForm />
            <div className="map-section">
              <h2>Location Map</h2>
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.517986715312!2d77.0978495!3d23.2177651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf4c949567e4d:0xc7649cfdfe73a024!2sSri%20Satya%20Sai%20University%20of%20Technology%20and%20Medical%20Sciences!5e0!3m2!1sen!2sin!4v1712845678901!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSSUTMS Location"
                ></iframe>
                <p>View larger map</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=23.2156518,77.1272006&travelmode=driving"
                  target="_blank"
                  rel="noopener"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;