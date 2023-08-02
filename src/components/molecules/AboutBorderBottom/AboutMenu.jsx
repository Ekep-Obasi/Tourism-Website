/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Buttons from '../../atoms/Buttons/Buttons';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        <div className={styles.option}>
          <label htmlFor={styles.guestSelect}>Guests</label>
          <select>
            <option>2 Adult</option>
          </select>
        </div>
        <div className={styles.option}>
          <label htmlFor="dateSelect">Date</label>
          <select>
            <option>12 - 13 April 202</option>
          </select>
        </div>
        <div className={styles.option}>
          <label htmlFor="pakageSelect">Package</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className={styles['tourism-site__Menu-button']}>
        <Buttons title="Book Now" color="#304F47" />
      </div>
    </div>
  );
}

export default Menu;
