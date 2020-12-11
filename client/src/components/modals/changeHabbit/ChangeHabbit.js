import React, { useState } from 'react';

import styles from './ChangeHabbit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';

const ChangeHabbit = ({ close }) => {
  const [habbitName, setHabbitName] = useState('');
  const [mark, setMark] = useState('');
  const [habbitTarget, setHabbitTarget] = useState('');

  const handleSubmit = evt => {
    console.log(
      'name:',
      habbitName,
      'mark:',
      mark,
      'habbitTarget',
      habbitTarget,
    );
    evt.preventDefault();
    close();
  };

  const handleDelete = () => {
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Редагування звички</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                className={styles.input}
                onChange={({ target: { value } }) => setHabbitName(value)}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <select
                className={styles.select}
                onChange={({ target: { value } }) => setHabbitTarget(value)}
                placeholder="Оберіть дитину"
              >
                <option disabled>Выберите героя</option>
                <option value="Чебурашка">Чебурашка</option>
                <option value="Крокодил Гена">Крокодил Гена</option>
                <option value="Шапокляк">Шапокляк</option>
                <option value="Крыса Лариса">Крыса Лариса</option>
              </select>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Бал</p>

              <input
                className={styles.inputMark}
                onChange={({ target: { value } }) => setMark(value)}
                placeholder="__"
              ></input>
            </label>

            <button className={styles.btnDelete} onClick={() => handleDelete()}>
              <span className={styles.btnDeleteIcon}></span> Видалити задачу
            </button>
          </div>
          <div className={styles.buttonsBlock}>
            <button className={styles.buttonSave}>Зберегти</button>

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

export default modalBackDrop(ChangeHabbit);
