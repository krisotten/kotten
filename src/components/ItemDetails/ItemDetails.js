import styles from './ItemDetails.module.css';

import React from 'react';

import evilEye from "../../img/evil_eye.jpg";

import {useLocation} from 'react-router-dom';

function ItemDetails(props) {
    const location = useLocation();
    const state = location.state;
    const {src, name, price} = state;

    return (
        <div className={styles.itemContainer}>
            <img src={src} className={styles.image} />

            <div className={styles.itemDetails}>
                <h1>{name}</h1>
                <p className={styles.price} >{price}</p>
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