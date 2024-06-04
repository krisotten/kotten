import styles from './cart.module.css';
import CartItem from '../../components/CartItem/CartItem.js';

import { Link } from 'react-router-dom';

import evilEye from "../../img/evil_eye.jpg";
import strawberry from "../../img/strawberry.jpg";
import brown from "../../img/brown.jpg";

export default function cart() {
    const list = [{name: 'Evil Eye Bag', price: "$39.99", src: evilEye}, {name: 'Strawberry Bag', price: "$39.99", src: strawberry}, {name: 'Brown Heart Bag', price: "$39.99", src: brown}];

    return (
        <div className={styles.container}>
            <div className={styles.itemList}>
                {list.map(item => {
                    return <CartItem src={item.src} name={item.name} price={item.price} />
                })}
            </div>

            <div class={styles.priceContainer} >
                <p className={styles.heading}>Order Summary</p>

                <div className={styles.pricePortion} >
                    <p>Subtotal</p>
                    <p>$39.99</p>
                </div>

                <div className={styles.pricePortion} >
                    <p>Shipping</p>
                    <p>$7.99</p>
                </div>

                <div className={styles.pricePortion} >
                    <p>Taxes</p>
                    <p>$1.99</p>
                </div>

                <hr className={styles.line} />

                <div className={styles.total} >
                    <p>TOTAL</p>
                    <p>$53.99</p>
                </div>

                <div className={styles.center}>
                    <button className={styles.button} >Continue to Checkout</button>
                </div>
            </div>

        </div>
    );
}