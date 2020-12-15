import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import boy from '../../img/avatars/boy_in_frame.png';
import girl from '../../img/avatars/girl_in_frame.png';
import HabitSubmitBox from '../UIcomponents/HabitSubmitBox/HabitSubmitBox';

import styles from './TaskItem.module.css';

export default function TaskItem({ name, points, daysToComplete, childId }) {
  const children = useSelector(state => state.children);
  const currentChild = children.find(el => el._id === childId);

  return (
    <div className={styles.habitItemFolder}>
      <img
        className={styles.avatar}
        src={
          currentChild.gender
            ? currentChild.gender === 'male'
              ? boy
              : girl
            : boy
        }
        alt="avatar"
      />
      <div className={styles.taskContentWrapper}>
        <div className={styles.taskInfo}>
          <p className={styles.habitTitle}>{name}</p>
          <p className={styles.habitPoints}>{points}</p>
        </div>
        {daysToComplete && (
          <div className={styles.taskTime}>
            <p className={styles.text}>Час на виконання:</p>
            <p className={styles.days}>{daysToComplete} день</p>
          </div>
        )}
        <HabitSubmitBox repeat={false} />
      </div>
    </div>
  );
}
