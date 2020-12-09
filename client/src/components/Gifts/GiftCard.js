import React from 'react'
import defaultLogo from '../../img/header/userInfo.svg';
import star from '../../img/svg/star.svg';
import array from './testArray'
import styles from './Gifts.module.css'
import dots from '../../img/svg/dots-grey.svg'
import testImg from './test.png'
import defaultImage from './defaultImage.png'

console.log(styles.giftCard);
export default function GiftCard({ logo = defaultLogo, img = defaultImage }) {
    return (
        <div className={styles.GiftContainer}>
            {array.map((el, i) => {
                return (<div key={i} className={styles.giftCard}>
                    <img width='26px' height='8px'
                        className={styles.dotsImage}
                        src={dots}
                        alt="dots"
                    />
                    <div className={styles.giftImageContainer}>
                        <img
                            className={styles.giftAvatar}
                            src={logo}
                            alt="default logo"
                        />
                        <img
                            className={styles.giftImage}
                            src={img}
                            alt="default logo"
                        />
                    </div>
                    <h2 className={styles.giftName}>Name Gift</h2>
                    <div className={styles.buttonPricePosition}>
                        <div className={styles.starPrice}>
                            <img
                                // className={styles.}
                                src={star}
                                alt="star"
                            />
                            <span>40</span>
                        </div>
                        <button className={styles.giftButton}>Button</button></div>
                </div>
                )
            })}

        </div>
    )
}

