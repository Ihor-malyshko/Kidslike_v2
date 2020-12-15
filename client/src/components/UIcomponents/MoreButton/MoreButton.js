import React, { useState } from 'react';
import BubbleComponent from '../BubbleComponent/BubbleComponent'

import styles from './MoreButton.module.css'

function MoreButton({type, data}) {
    const [showDropDown, setShowDropDown] = useState(false);
    const close = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <div className={styles.drop_down_folder}>
            <button className={styles.btn} type='button' onClick={() => close()}></button>
            {showDropDown && <BubbleComponent modalType={type} handleClick={() => close()} taskData={data} habitData={data}/>}
        </div>
    )
}

export default MoreButton;