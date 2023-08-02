import React from 'react';
import './ContactCard.css';
import emailcontact from '../../../assets/images/groupemail.png';
import phonecontact from '../../../assets/images/groupphone.png';

function ContactCard() {
  return (
    <div className="tourismSite__contactCard">
      <div className="contact-card">
        <h3>Social Media</h3>
        <div className="imgIcons">
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-twitter" />
          <i className="fa fa-linkedin" aria-hidden="true" />
        </div>
      </div>
      <div className="contact-card">
        <h3>Email & Phone</h3>
        <div className="imgAddress">
          <img src={emailcontact} alt="email" />
          <img src={phonecontact} alt="phone" />
        </div>
      </div>
      <div className="contact-card">
        <h3>Adress</h3>
        <p>kk 600 st</p>
        <p>Kigal, Rwanda</p>
      </div>
    </div>
  );
}

export default ContactCard;
