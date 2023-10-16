import React from 'react';
import './ContactMe.css'; // Create a corresponding CSS file for styling
import {FaGithub } from 'react-icons/fa'; // Import social media icons from React Icons

const ContactMe = () => {
  return (
    <section id="contact">
    <div className="contact-me-box">
      
      <h2 className="contact-me-heading">Contact Me</h2>
      <div className="social-icons">
        <a href="https://github.com/GopavarapuAnupama" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <p>gslanupama@gmail.com</p>
      {/* Add more contact information as needed */}
     
    </div>
    </section>

  );
};

export default ContactMe;
