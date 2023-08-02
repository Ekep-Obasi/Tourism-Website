import React from 'react';
import styles from './Card.module.css';
import CardData from '../../../data/CardData.json';

function Card() {
  return (
    <div className={styles['tourism-site__Card__container']}>
      {CardData.map((data) => {
        return (
          <div className={styles['tourism-site__Card-card']} key={data.id}>
            <div className={styles['tourism-site__Card-card-text']}>
              <img src={data.src} alt={data.title} />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
            <button type="button">Learn More</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
