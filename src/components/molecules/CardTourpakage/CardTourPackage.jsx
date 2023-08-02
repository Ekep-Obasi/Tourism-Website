import React from 'react';
import './CardTourPackage.css';
import CardTourPackageData from '../../../data/CardTourPackage.json';

function CardTourPackage() {
  return (
    <div className="cardWrapper">
      {CardTourPackageData.map((data) => {
        return (
          <div className="card">
            <div className="cardText" key={data.desc}>
              <img src={data.src} alt={data.title} />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
            <div className="learnMore__button-container">
              <button type="button">Learn More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardTourPackage;
