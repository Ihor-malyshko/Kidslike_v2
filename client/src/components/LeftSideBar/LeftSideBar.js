import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import defaultLogo from '../../img/header/userInfo.svg';
import family from '../../img/header/family.svg';
import star from '../../img/svg/star.svg';
import arrow from '../../img/svg/arrow.svg';
import Button from '../UIcomponents/Button/Button';
import styles from './LeftSideBar.module.css';
import AddChildren from '../modals/addChildren/AddChildren';
import childrenOperations from '../../redux/children/childrenOperations';
import { useSelector, useDispatch } from 'react-redux';
import MoreButton from '../UIcomponents/MoreButton/MoreButton';

export default function LeftSideBar({ logo = defaultLogo, family: Family }) {
  const dispatch = useDispatch();
  const [showAddChildren, setShowAddChildren] = useState(false);
  const children = useSelector(state => state.children);
  const tasks = useSelector(state => state.tasks);
  const close = () => {
    setShowAddChildren(false);
  };

  useEffect(() => {
    dispatch(childrenOperations.getAllChildren());
  }, []);

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
        <ul className={styles.cardsContainer}>
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
                    {tasks.map(
                      element =>
                        element.childId === el._id &&
                        element.isCompleted === null && (
                          <li className={styles.habitsList}>
                            <span className={styles.spanText}>
                              {element.name}
                            </span>
                            <span className={styles.spanNumber}>
                              +{element.points}
                            </span>
                          </li>
                        ),
                    )}
                    {/* <li className={styles.habitsList}>
                      <span className={styles.spanText}>Викинути сміття</span>
                      <span className={styles.spanNumber}>+4</span>
                    </li> */}
                  </ul>
                </div>
                <NavLink
                  to={`/home/child/${el._id}`}
                  className={styles.arrowText}
                >
                  До виконаних задач
                  <img src={arrow} alt="arrow" className={styles.arrow} />
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Button
          label={'Додати дитину  +'}
          transparent={true}
          type={'button'}
          handleClick={() => setShowAddChildren(true)}
        ></Button>
        {showAddChildren && <AddChildren close={() => close()} />}
      </div>
    </>
  );
}
