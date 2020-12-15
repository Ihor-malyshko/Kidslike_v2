import React, { useState } from 'react';

import styles from './ChangeTask.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import operations from '../../../redux/tasks/taskOperations';
import { useDispatch,useSelector } from 'react-redux';
const ChangeTask = ({ close, data }) => {
  const children = useSelector(state => state.children);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(data.name);
  const [mark, setMark] = useState(data.points);
  const [taskTarget, setTaskTarget] = useState(data.childId);
  const [taskDays, setTaskDays] = useState(data.daysToComplete);

  const handleSubmit = evt => {
    console.log(
      'name:',
      taskName,
      'points',
      mark,
      'id',
      taskTarget,

    );

    dispatch(
      operations.updateTask(
        {
          name: taskName,
          childId: taskTarget,
          points: mark,
          daysToComplete: taskDays,
        },
        data._id,
      ),
    );
    evt.preventDefault();
    close();
  }
  const handleDelete = () => {
    dispatch(operations.deleteTask(data._id))
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Редагування задачі</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                defaultValue={data.name}
                className={styles.input}
                onChange={({ target: { value } }) => setTaskName(value)}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <select
                defaultValue={data.childId}
                value={children.childId}
                className={styles.select}
                onChange={({ target: { value } }) => setTaskTarget(value)}
                placeholder="Оберіть дитину"
              >
                <option key={children.id}>Оберіть дитину</option>
                {children &&
                  children.map(child => (
                    <option key={child._id} value={child._id}>
                      {child.name}
                    </option>
                  ))}
              </select>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Бал</p>

              <input
                defaultValue={data.points}
                className={styles.inputMark}
                onChange={({ target: { value } }) => setMark(value)}
                placeholder="__"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>
                Дні на виконання (необов’язково)
              </p>

              <input
                defaultValue={data.daysToComplete}
                className={styles.inputDays}
                onChange={({ target: { value } }) => setTaskDays(value)}
                placeholder="___"
              ></input>
            </label>
            <button className={styles.btnDelete} onClick={() => handleDelete()}>
              <span className={styles.btnDeleteIcon}></span> Видалити задачу
            </button>
          </div>
          <div className={styles.buttonsBlock}>
            <button onClick={handleSubmit} className={styles.buttonSave}>
              Зберегти
            </button>

            <button className={styles.buttonCancle} onClick={() => close()}>
              Відміна
            </button>
          </div>
        </form>
        <button
          onClick={() => close()}
          className={styles.modalCloseBtn}
        ></button>
      </div>
    </>
  );
};

export default modalBackDrop(ChangeTask);
