import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChangeHabbit from '../../modals/changeHabbit/ChangeHabbit';
import ChangeTask from '../../modals/changeTask/ChangeTask';
import habitOperations from '../../../redux/habbit/habbitOperations';
import operations from '../../../redux/tasks/taskOperations'
    
import styles from './BubbleComponent.module.css';
import ChangeChildren from '../../modals/changeChildren/ChangeChildren';

export default function BubbleComponent({ modalType, handleClick, msg, width, height, top,taskData, habitData}) {
    const [showModal, setShowModal] = useState(false);
    const close = () => {
        setShowModal(!showModal);
    };

    const dispatch = useDispatch();
    const deleteHabit = (id) => {
        dispatch(habitOperations.deleteHabit(id))
    }
    const deleteTask = (id) => {dispatch(operations.deleteTask(id))}

    return msg ? (
      <div
        style={{ width: width, height: height, top: top }}
        className={styles.arrowBox}
      >
        <p className={styles.authText}>{msg}</p>
      </div>
    ) : (
      <>
        <div className={styles.reviews}>
            
          <div className={styles.comment}>
            <div className={styles.comment_bubble}>
              <button className={styles.optionButton} onClick={() => close()}>
                Редагувати
              </button>

              {modalType === 'habit' && 
              <button className={styles.optionButton}
                onClick={() => {
                  deleteHabit(habitData._id);
                  handleClick();
                }}
              >
                Видалити
              </button> }
                {modalType === 'task' && <button
                    className={styles.optionButton}
                    onClick={() => {
                        deleteTask(taskData._id);
                        handleClick();
                    }}
                >
                    Видалити
              </button>}
            </div>
                {modalType === 'habit' && showModal && <ChangeHabbit data={habitData} close={() => { close(); handleClick() }} />}
                {modalType === 'task' && showModal && <ChangeTask close={() => { close(); handleClick() }} />}
                {modalType === 'child' && showModal && <ChangeChildren close={() => { close(); handleClick() }} />}
            {/* {modalType === 'gift' && showModal && <ChangeGift close={close} />} */}
            </div>
          </div>
          </>
    )
}