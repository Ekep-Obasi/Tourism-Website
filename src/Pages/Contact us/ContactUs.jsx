/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './ContactUs.css';
import NavBar from '../../components/organisms/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import LandingImage from '../../components/molecules/LandingImage/LandingImage';
import Form from './Form/Form';
import Footer from '../../components/organisms/Footer/Footer';
import ContactCard from './ContactCard/ContactCard';

function ContactUs() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Contact Us" />
      <div className="text__containter">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don't hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>
      <Form />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default ContactUs;
