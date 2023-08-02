import React from 'react';
import styles from './Profiles.module.css';
import workersData from '../../../data/WorkersData.json';

function Profiles() {
  return (
    <div className={styles['tourism-site__Profiles-container']}>
      <div className={['tourism-site__Profiles-wrapper']}>
        {workersData.map((data) => {
          return (
            <div className={['tourism-site__Profiles-profile']} key={data.id}>
              <div className={['tourism-site__Profiles-images']}>
                <img src={data.src} alt={data.name} />
              </div>
              <div className={['tourism-site__Profiles-profile-text']}>
                <h3>{data.name}</h3>
                <p>{data.about}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={['tourism-site__Profiles-tiles']}>
        <span>span</span>
        <span>span</span>
        <span>span</span>
      </div>
    </div>
  );
}

export default Profiles;
