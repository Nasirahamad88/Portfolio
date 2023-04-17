import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-header">Get in Touch</h2>
        <p className="section-text">
          Interested in working together or just want to say hello? Feel free to
          contact me.
        </p>
        <div className="social-icons">
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/example/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
