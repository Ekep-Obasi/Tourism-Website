import React from 'react';
import SliderData from '../../../data/SliderData.json';
import styles from './Slider.module.css';

function Slider() {
  return (
    <div className={styles['tourism-site__Slider-container']}>
      <div className={styles['tourism-site__Slider-button']}>
        <button type="button">&lang;</button>
        <button type="button">&rang;</button>
      </div>
      <div className={styles['tourism-site__Slider-wrapper']}>
        {SliderData.map((data) => {
          return (
            <div className={styles['tourism-site__Slider-slide']} key={data.id}>
              <div className={styles['tourism-site__Slider-slide-text']}>
                <img src={data.scr} alt={data.title} />
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
