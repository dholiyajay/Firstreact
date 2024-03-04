import React from 'react';

import styles from "./Crad.module.css";
// import styles from '../component/Crad.css';


function Card({ data }) {
    // console.log(data);
    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>{data.name}</h3>
            <h4  className={styles.cardTitle}>{data.price}</h4>
            <h4  className={styles.cardTitle}>{data.desc}</h4>
            <h4  className={styles.cardTitle}>{data.expiry}</h4>
         

            <h4 className={styles.cardFees}>{data.fees}</h4>
            <h4  className={styles.cardTitle}>{data.speciality}</h4>
            <h4  className={styles.cardTitle}>{data.hospital}</h4>



        </div>
    );
}

export default Card;