import React from 'react';
import { NavLink } from 'react-router-dom';
import pin from '../../img/header/pin.svg';
import gift from '../../img/header/gift.svg';
import familyImg from '../../img/header/family.svg';

import styles from './Navigation.module.css';

export default function Navigation({ familyRender , family,familyRenderAnotherLinks }) {
  return (
    <>
      <ul className={styles.navList}>
        <li onClick={familyRender} className={[styles.listItem, styles.family].join(' ')} style={family?{backgroundColor:"transparent", border: "1px solid #bdbdbd"}:{backgroundColor:"",border: ""}}>
          {/* <NavLink className={styles.navLink} to="/"> */}
          <img className={styles.itemImg} src={familyImg} alt="pin" />
          <span className={styles.familySpan}>
            Сім’я
            </span>
          {/* </NavLink> */}
        </li>
        <li className={styles.listItem}>
          <NavLink onClick = { familyRenderAnotherLinks } className={styles.navLink} to="/home">
            <img className={styles.itemImg} src={pin} alt="pin" />
            <span>
              Звички i задачi
            </span>
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink onClick = { familyRenderAnotherLinks } className={styles.navLink} to="/home/gifts">
            <img className={styles.itemImg} src={gift} alt="gift" />
            <span>
              Подарунки
            </span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
