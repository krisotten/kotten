import styles from './ItemDetails.module.css';

import React from 'react';

import evilEye from "../../img/evil_eye.jpg";

function ItemDetails() {
    return (
        <div className={styles.itemContainer}>
            <img src={evilEye} className={styles.image} />

            <div className={styles.itemDetails}>
                <h1>Swirl Crochet Mini Bag</h1>
                <p className={styles.price} >$39.99</p>
                <p className={styles.description} >Mini crochet bag with swirl pattern. Handmade using 100% acrylic yarn. <br /><br /> Measures 6.5” x 7.5”</p>
                <div className={styles.rectangle}>
                    <p className={styles.quantity}>-</p>
                    <p className={styles.quantityNum}>1</p>
                    <p className={styles.quantity}>+</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ItemDetails;