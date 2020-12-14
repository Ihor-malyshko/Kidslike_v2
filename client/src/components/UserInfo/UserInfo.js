import React, { Component, useState } from 'react';
import defaultLogo from '../../img/header/userInfo.svg';
import logout from '../../img/header/logout.svg';
import style from './UserInfo.module.css';
import Logout from '../Logout/Logout';
import EditChild from '../UIcomponents/EditChild/EditChild'
export default function UserInfo() {

  const [showModal, setShowModal] = useState(false);
  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={style.userInfoContainer}>
        <img
          className={style.userAvatar}
          src={defaultLogo}
          alt="default logo"          
        />
        <div className={style.bubbleWrap}>
          <EditChild/>
        </div>
        <span className={style.userName}>Name</span>

        <img
          src={logout}
          alt="logout"
          className={style.logout}
          onClick={() => setShowModal(true)}
        />

        {showModal && <Logout close={() => close()} />}
      </div>
    </>
  );
}
