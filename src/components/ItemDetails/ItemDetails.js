import styles from './ItemDetails.module.css';

import React from 'react';

import evilEye from "../../img/evil_eye.jpg";

import {useLocation} from 'react-router-dom';

function ItemDetails(props) {
    // const { state } = useLocation();
    // const { name, price, src } = state;

    return (
        <div className={styles.itemContainer}>
            <img src={evilEye} className={styles.image} />

            <div className={styles.itemDetails}>
                <h1>Test</h1>
                <p className={styles.price} >Test</p>
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