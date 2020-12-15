import React, { useState } from 'react';

import styles from './ChangeChildren.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import MoreButton from '../../UIcomponents/MoreButton/MoreButton';

const ChangeChildren = ({ close }) => {
  const [childName, setChildName] = useState('');
  const [childGender, setChildGender] = useState('');

  const handleSubmit = evt => {
    console.log('name:', childName, 'Gender:', childGender);
    evt.preventDefault();
    close();
  };

  const handleDelete = () => {
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Редагування дитини</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Ім’я дитини</p>
              <input
                className={styles.input}
                placeholder="Ім’я"
                value={childName}
                onChange={({ target: { value } }) => setChildName(value)}
              ></input>
            </label>
            <p className={styles.childrenTitle}>Оберіть стать дитини</p>
            <label className={styles.customLabel}>
              <input
                name="gender"
                type="radio"
                onChange={() => setChildGender('girl')}
              />
              <span className={styles.radiobox}></span>
            </label>
            <p className={styles.customName}>дівчинка</p>
            <label className={styles.customLabel}>
              <input
                name="gender"
                type="radio"
                onChange={() => setChildGender('boy')}
              />
              <span className={styles.radiobox}></span>
            </label>
            <p className={styles.customName}>хлопчик</p>
            
            <button className={styles.btnDelete} onClick={() => handleDelete()}>
              <span className={styles.btnDeleteIcon}></span> Видалити дитину
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

export default modalBackDrop(ChangeChildren);
