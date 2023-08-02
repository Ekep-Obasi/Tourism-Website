/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Footer.module.css';
import logo from '../../../assets/images/NavBar-Logo.png';
import facebookIcon from '../../../assets/images/facebook.png';
import twitterIcon from '../../../assets/images/twitter.png';
import linkedInIcon from '../../../assets/images/LinkedIn.png';
import instagramIcon from '../../../assets/images/Instagram.png';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles['container-left']}>
          <div className={styles['Footer__container__text-left']}>
            <h1>If you have any question, Let us help you!</h1>
            <div className={styles.subtextcontainer}>
              <p>
                If you have any questions or would like to book a tour with us,
                please don't hesitate to contact us.
              </p>
              <p>
                Phone: +250 788 123 456 Email: info@rwandatourism.com Address:
                Kigali, Rwanda
              </p>
            </div>
            <form>
              <label className={styles.formLable}>
                Subscribe to our newspaper
              </label>
              <div className={styles.input__button}>
                <input
                  className={styles.footerInput}
                  type="text"
                  placeholder="Input your email here"
                />
                <button className={styles.sendButton} type="button">
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles['container-right']}>
          <div className={styles.logoAndLinks}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.footerLinks}>
              <img src={facebookIcon} alt="facebook" />
              <img src={twitterIcon} alt="twitter" />
              <img src={linkedInIcon} alt="linkedIn" />
              <img src={instagramIcon} alt="instagram" />
            </div>
          </div>
          <div className={styles['container__right-text']}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.footerMain__Links}>
            <ul>
              <li>Home</li>
              <li>Testimonials</li>
              <li>Destinations</li>
              <li>Sign In</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Packages</li>
              <li>Events</li>
              <li>Gallery</li>
            </ul>
            <ul>
              <li>Our Team</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rightsText}>
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </div>
  );
}

export default Footer;
