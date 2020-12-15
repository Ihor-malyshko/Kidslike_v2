import React, { useEffect, useState } from 'react';

import boy from '../../img/avatars/boy_in_frame.png';
import girl from '../../img/avatars/girl_in_frame.png';
import HabitSubmitBox from '../UIcomponents/HabitSubmitBox/HabitSubmitBox';

import styles from './HabitItem.module.css';

function HabitItem({ gender, name, points, createdAt, daysToComplete, _id }) {
  const todaysDate = new Date().toISOString().slice(0, 10);

  const [selectedDate, setSelectedDate] = useState(todaysDate)
  // const habits = useSelector(state => state.habbits);
  // const dispatch = useDispatch();

  useEffect(() => {
  }, );

  const hahdleClick = (date) => { setSelectedDate(date) };


  return (
    <div className={styles.habitItemFolder}>
      <img
        className={styles.avatar}
        src={gender === 'male' ? boy : girl}
        alt="avatar"
      ></img>
      <div className={styles.habitContentWrapper}>
        <p className={styles.habitTitle}>{name}</p>
        <ul className={styles.daysList}>
          {daysToComplete.length > 0 && daysToComplete.map(el => (
            <li className={
              [el.done === 'yes' ? styles.daysItem_done
                : el.done === 'no' ? styles.daysItem_notdone
                  : styles.daysItem,
                selectedDate === el.date ? styles.daysItem_active :  styles.daysItem
              ].join(' ')} onClick={() => hahdleClick(
                el.date <= todaysDate &&
                el.date)}
              >
              <span className={el.done === null ? styles.points : styles.points_checked}>{points}</span>
            </li>
          ))}
        </ul>
        <p className={styles.text}>x1.5</p>
      </div>
      <HabitSubmitBox id={_id} date={ selectedDate}/>
    </div>
  );
}

export default HabitItem;
