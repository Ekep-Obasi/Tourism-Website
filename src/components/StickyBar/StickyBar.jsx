import React from 'react';
import './StickyBar.css';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/twitter.png';
import linkedInIcon from '../../assets/images/LinkedIn.png';
import instagramIcon from '../../assets/images/Instagram.png';
import email from '../../assets/images/group email.png';
import phone from '../../assets/images/group phone.png';

function StickyBar() {
  return (
    <div className="tourism-site__stickybar">
      <div className="tourism-site__stickybar-info">
        <img src={phone} alt="contact" />
        <img src={email} alt="email" />
      </div>
      <div className="tourism-site__stickybar-icons">
        <img src={facebookIcon} alt="facebook" />
        <img src={twitterIcon} alt="twitter" />
        <img src={linkedInIcon} alt="linkedIn" />
        <img src={instagramIcon} alt="instagram" />
      </div>
    </div>
  );
}

export default StickyBar;
