import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import defaultLogo from '../../img/header/userInfo.svg';
import family from '../../img/header/family.svg';
import star from '../../img/svg/star.svg';
import arrow from '../../img/svg/arrow.svg';
import Button from '../UIcomponents/Button/Button';
import array from './testArray';
import styles from './LeftSideBar.module.css';
import AddChildren from '../modals/addChildren/AddChildren';
import childrenOperations from '../../redux/children/childrenOperations';
import { useSelector, useDispatch } from 'react-redux';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';

export default function LeftSideBar({ logo = defaultLogo, family: Family }) {
  const dispatch = useDispatch();
  const [showAddChildren, setShowAddChildren] = useState(false);
  const children = useSelector(state => state.children);

  const close = () => {
    setShowAddChildren(false);
  };

  useEffect(() => {
    dispatch(childrenOperations.getAllChildren());
  }, []);

  console.log('children', children);
  return (
    <>
      <div
        className={
          Family
            ? [styles.container, styles.renderClass].join(' ')
            : styles.container
        }
      >
        <div className={styles.titleName}>
          <img src={family} alt="family" className={styles.iconFamily} />
          <h1 className={styles.title}>Сім’я</h1>
        </div>
        <div className={styles.cardsContainer}>
          {children.map((el, i) => {
            return (
              <div key={i} className={styles.leftSideBarCard}>
                <div className={styles.moreButton_wraper} >{ <MoreButton type={'child'} />}</div>
                
                <div className={styles.childTitle}>
                  <img
                    className={styles.leftSideBarAvatar}
                    src={logo}
                    alt="default logo"
                  />
                  <h2 className={styles.childName}>{el.name}</h2>
                  <img className={styles.star} src={star} alt="star" />
                  <span>{el.points}</span>
                </div>

                <div className={styles.task}>
                  <ul>
                    <li className={styles.habitsList}>
                      <span className={styles.spanText}>Викинути сміття</span>
                      <span className={styles.spanNumber}>+4</span>
                    </li>
                    <li className={styles.habitsList}>
                      <span className={styles.spanText}>Викинути сміття</span>
                      <span className={styles.spanNumber}>+4</span>
                    </li>
                  </ul>
                </div>
                <NavLink to="/home/child" className={styles.arrowText}>
                  До виконаних задач
                  <img src={arrow} alt="arrow" className={styles.arrow} />{' '}
                </NavLink>
              </div>
            );
          })}
          <Button
            label={'Додати дитину  +'}
            transparent={true}
            type={'button'}
            handleClick={() => setShowAddChildren(true)}
          ></Button>
          {showAddChildren && <AddChildren close={() => close()} />}
        </div>
      </div>
    </>
  );
}
