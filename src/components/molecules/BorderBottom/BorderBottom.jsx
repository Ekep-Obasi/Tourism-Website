/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Buttons from '../../atoms/Buttons/Buttons';
import './BorderBottom.css';

function BorderBottom() {
  return (
    <div className="tourism-site__borderBottom">
      <div className="tourism-site__borderButton-input">
        <input type="text" placeholder="Search Activities or Destinations" />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
      <div className="tourism-site__BorderBottom__container-options">
        <div className="tourism-site__BorderBottom-option">
          <label htmlFor="guestSelect">Guests</label>
          <select>
            <option>2 Adult</option>
          </select>
        </div>
        <div className="tourism-site__BorderBottom-option">
          <label htmlFor="dateSelect">Date</label>
          <select>
            <option>12 - 13 April 202</option>
          </select>
        </div>
        <div className="tourism-site__BorderBottom-option">
          <label htmlFor="pakageSelect">Package</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className="tourism-site__BorderBottom-button">
        <Buttons title="Book Now" color="#C7923E" />
      </div>
    </div>
  );
}

export default BorderBottom;
