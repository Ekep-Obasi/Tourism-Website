/* eslint-disable react/prop-types */
import React from 'react';
import styles from './LandingImage.module.css';

function LandingImage({ title }) {
  return (
    <div className={styles.heroImage}>
      <h1>{title}</h1>
      <div className={styles.landingImage__subtitle}>
        <h3>Home</h3>
        <i className="fa fa-caret-right" aria-hidden="true" />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default LandingImage;
