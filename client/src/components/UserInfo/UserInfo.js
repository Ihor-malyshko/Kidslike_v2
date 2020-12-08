import React from 'react'
import defaultLogo from '../../images/header/userInfo.svg'
import logout from '../../images/header/logout.svg'
import style from './UserInfo.module.css'
import { NavLink } from 'react-router-dom'
export default function UserInfo() {
  return (
    <>
      <div className={style.userInfoContainer}>
        <img className={style.userAvatar} src={defaultLogo} alt="default logo" />
        <span className={style.userName} >Name</span>
        <NavLink to='/'>
          <img src={logout} alt='logout' className={style.logout} />
        </NavLink>
      </div>

    </>
  )
}