import styles from './cart.module.css';
import CartItem from '../../components/CartItem/CartItem.js';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';

export default function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.itemList}>
                {cart.map(item => {
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
                    <Link to="/shipping" ><button className={`${styles.button} ${styles.hvrGrow}`} >Continue to Checkout</button></Link>
                </div>
            </div>

        </div>
    );
}