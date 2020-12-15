import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HabitItem from '../HabitItem/HabitItem'
import styles from './HabitsList.module.css'
import habitsTemplate from '../HabitItem/habitsTemplate.json'
import MoreButton from '../UIcomponents/MoreButton/MoreButton';
import Button from '../UIcomponents/Button/Button';
import AddHabbit from '../modals/addHabbit/AddHabbit';
import habbitOperations from '../../redux/habbit/habbitOperations'

function HabitsList() {
    const [showAddHabitModal, setShowAddHabitModal] = useState(false);
    const close = () => { setShowAddHabitModal(false) };
    const habits = useSelector(state => state.habbits);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(habbitOperations.getAllHabits());
        console.log('habits', habits);
    }, []);

    useEffect(() => {
        // dispatch(habbitOperations.getAllHabits());
        // console.log('habits', habits);
    }, [habits]);

    return (
        <div className={styles.listHolder}>
            <div className={styles.gifsTitleContainer}>
                <div className={styles.giftIcon}></div>
                <h1 className={styles.giftTitle}>Звички</h1>
            </div>
            <ul className={styles.HabitList}>
                {habits.map((el, i) => (
                    <li
                        key={el._id}
                        className={styles.HabitItem}
                    >
                        <MoreButton type={'habit'} data={el} />
                        <HabitItem {...el} />
                    </li>
                ))}
            </ul> 
            <Button label={'Додати звичку +'} handleClick={() => setShowAddHabitModal(true)} type={'button'} orange={true} />
            {showAddHabitModal && <AddHabbit close={() => close()}/>}
        </div>
    )
}



export default HabitsList;