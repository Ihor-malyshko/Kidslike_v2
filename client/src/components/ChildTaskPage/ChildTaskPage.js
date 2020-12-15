import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/tasks/taskOperations';
import styles from './ChildTaskPage.module.css';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import defaultLogo from '../../img/header/userInfo.svg';

export default function ChildTaskPage() {
  const tasks = useSelector(state => state.tasks);
  const children = useSelector(state => state.children);

  const dispatch = useDispatch();
  const childId = window.location.href.slice(
    window.location.href.lastIndexOf('/') + 1,
  );

  useEffect(() => {
    dispatch(operations.getAllTasks());
  }, []);
  useEffect(() => {}, [tasks]);

  {
    return (
      <div className={styles.listHolder}>
        {children.map(
          el =>
            el._id === childId && (
              <div>
                <div className={styles.gifsTitleContainer}>
                  <div className={styles.giftIcon}>
                    <img
                      className={styles.leftSideBarAvatar}
                      src={defaultLogo}
                      alt="default logo"
                    />
                  </div>
                  <h1 className={styles.giftTitle}>{el.name}</h1>
                </div>
                <ul className={styles.HabitList}>
                  {tasks.map(
                    element =>
                      element.childId === el._id && (
                        <li key={element._id} className={styles.HabitItem}>
                          <MoreButton type={'task'} />
                          <TaskItem {...element} />
                        </li>
                      ),
                  )}
                </ul>
              </div>
            ),
        )}
        <Button label={'Дивитися ще'} type={'button'} white={true} />
      </div>
    );
  }
}
