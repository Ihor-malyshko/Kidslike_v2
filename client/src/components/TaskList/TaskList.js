import React, { useState, useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/tasks/taskOperations';
import styles from './TaskList.module.css';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddTask from '../modals/addTask/AddTask';

export default function TaskList() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const close = () => {
    setShowAddTaskModal(false);
  };
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getAllTasks());
  }, []);
  useEffect(() => {}, [tasks]);
  return (
    <div className={styles.listHolder}>
      <div className={styles.gifsTitleContainer}>
        <div className={styles.giftIcon}></div>
        <h1 className={styles.giftTitle}>Задачі</h1>
      </div>
      <ul className={styles.HabitList}>
        {tasks.map(el => (
          <li key={el._id} className={styles.HabitItem}>
            <MoreButton type={'task'} data={el} />
            <TaskItem {...el} />
          </li>
        ))}
      </ul>
      <Button
        label={'Додати задачу +'}
        handleClick={() => setShowAddTaskModal(true)}
        type={'button'}
        orange={true}
      />
      {showAddTaskModal && <AddTask close={() => close()} />}
    </div>
  );
}
