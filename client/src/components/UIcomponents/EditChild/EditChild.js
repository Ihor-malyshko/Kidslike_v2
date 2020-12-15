import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChangeHabbit from '../../modals/changeHabbit/ChangeHabbit';
import ChangeTask from '../../modals/changeTask/ChangeTask';
import habitOperations from '../../../redux/habbit/habbitOperations';
import comingSoon from '../EditChild/coming_soon.gif'
    
import styles from './EditChild.module.css';
import ChangeChildren from '../../modals/changeChildren/ChangeChildren';

export default function EditChild({ modalType, handleClick, msg, width, height, top, habitData}) {
    const [showModal, setShowModal] = useState(false);
    const close = () => {
        setShowModal(!showModal);
    };

    const dispatch = useDispatch();
    const deleteHabit = (id) => {
        dispatch(habitOperations.deleteHabit(id))
    }

    return (
      msg ? <div style = {{width:width,height:height,top:top}}
      className={styles.arrowBox}><p className={styles.authText}>{msg}</p></div> : 
      <>
        <div className={styles.reviews}>
          <div className={styles.comment}>
            <div className={styles.comment_bubble}>
              <button className={styles.optionButton} onClick={() => close()}>Профіль</button>
              <button className={styles.optionButton} onClick={() => close()}>Статистика</button>             
                <img
                  className={styles.comingSoon}
                  src={comingSoon}
                  alt="coming soon gif"
                /> В розробці
              </div>
          </div>
        </div>
          {modalType === 'child' && showModal && <ChangeChildren close={() => { close(); handleClick() }} />}
      </>
    )
}