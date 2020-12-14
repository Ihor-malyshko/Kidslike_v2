import React from 'react';
import boy from '../../img/avatars/boy_in_frame.png';
import girl from '../../img/avatars/girl_in_frame.png';
import HabitSubmitBox from '../UIcomponents/HabitSubmitBox/HabitSubmitBox';

import styles from './HabitItem.module.css';

function HabitItem({ gender, name, points, createdAt, daysToComplete }) {
  return (
    <div className={styles.habitItemFolder}>
      <img
        className={styles.avatar}
        src={gender === 'boy' ? boy : girl}
        alt="avatar"
      ></img>
      <div className={styles.habitContentWrapper}>
        <p className={styles.habitTitle}>{name}</p>
        <ul className={styles.daysList}>
          {daysToComplete.map(el => (
            <li className={styles.daysItem}>
              <span className={styles.points}>{points}</span>
            </li>
          ))}
        </ul>
        <p className={styles.text}>x1.5</p>
      </div>
      <HabitSubmitBox />
    </div>
  );
}

export default HabitItem;
