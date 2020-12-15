import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HabitCheckBtn from '../../UIcomponents/HabitCheckBtn/HabitCheckBtn';
import habbitOperations from '../../../redux/habbit/habbitOperations';

import styles from './HabitSubmitBox.module.css';

function HabitSubmitBox({ repeat, id, date }) {
    const dispatch = useDispatch();
    const onClick = (req_data) => {
        dispatch(habbitOperations.checkHabitDone(id, req_data))
    }

    return (
        <div className={styles.submitBox}>
            {repeat ?
                <><p className={styles.submitBoxTitle}>Повторити</p>
                    <HabitCheckBtn isRepeatMark={repeat} handelClick={() => { }} label={'Підтвердити виконання'} />
                </> :
                <><p className={styles.submitBoxTitle}>Підтвердження</p>
                    <HabitCheckBtn isCheckMark={true} handelClick={() => { onClick({date, done: 'yes'}) }} label={'Підтвердити виконання'} />
                    <HabitCheckBtn handelClick={() => { onClick({ date, done: 'no' }) }} label={'Підтвердити не виконання'} />
                </>}
        </div>
    )
}

export default HabitSubmitBox;