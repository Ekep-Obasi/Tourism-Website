/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Buttons.module.css';

function Buttons({ title, color }) {
  return (
    <button
      className={styles['tourism-site__button']}
      type="button"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
}

export default Buttons;
