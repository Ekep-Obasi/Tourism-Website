/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Header.module.css';

function Header({ title, subtitle }) {
  return (
    <div className={styles['tourism-site__Home__header-container']}>
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default Header;
