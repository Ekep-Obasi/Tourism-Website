import React from 'react';
import logoData from '../../../data/LogoData.json';
import './Logos.css';
import logo from '../../../assets/images/Vector.svg';

function Logos() {
  return (
    <div className="tourism-site__Logo-wrapper">
      {logoData.map((data) => {
        return (
          <div className="tourism-site__Logo-container">
            <div className="tourism-site__Logo-image">
              <img src={logo} alt="momo" />
            </div>
            <div className="tourism-site__Logo-text">{data.txt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Logos;
