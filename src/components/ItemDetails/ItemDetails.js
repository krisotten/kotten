import styles from './ItemDetails.module.css';

import React, {useContext} from 'react';

import {useLocation, Link} from 'react-router-dom';

function ItemDetails(props) {
    const location = useLocation();
    const state = location.state;
    const {src, name, price} = state;

    return (
        <div className={styles.itemContainer}>
            <img src={src} className={styles.image} />

            <div className={styles.itemDetails}>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <p className={styles.price} >{price}</p>
                    <p className={styles.description} >Mini crochet bag with swirl pattern. Handmade using 100% acrylic yarn. <br /><br /> Measures 6.5” x 7.5”</p>
                </div>

                <div className={styles.buttons}>
                    <div className={styles.rectangle}>
                        <p className={styles.minus}>-</p>
                        <p className={styles.quantityNum}>1</p>
                        <p className={styles.plus}>+</p>
                    </div>
                    <Link to="/cart" ><button className={styles.hvrGrow} >Add to Cart</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;