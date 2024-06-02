import styles from './ItemDetails.module.css';

import React from 'react';

import evilEye from "../../img/evil_eye.jpg";

function ItemDetails() {
    return (
        <div className={styles.itemContainer}>
            <img src={evilEye} className={styles.image} />
            <div className={styles.itemDetails}>
                
            </div>
        </div>
    );
}

export default ItemDetails;