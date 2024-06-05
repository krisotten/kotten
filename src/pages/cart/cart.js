import styles from './cart.module.css';
import CartItem from '../../components/CartItem/CartItem.js';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';

export default function Cart() {
    const { cart } = useContext(CartContext);

    let subtotal = 0;
    cart.forEach(item => subtotal += Number(item.price.replace("$", "")));

    let tax = subtotal * 0.07;
    let shipping = 9;
    let total = subtotal + tax + shipping;
    
    if (cart.length > 0) {
        return (
            <div className={styles.container}>
                <div className={styles.itemList}>
                    {cart.map(item => {
                        return <CartItem src={item.src} name={item.name} price={item.price} amount={item.amount} />
                    })}
                </div>

                <div class={styles.priceContainer} >
                    <p className={styles.heading}>Order Summary</p>

                    <div className={styles.pricePortion} >
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>

                    <div className={styles.pricePortion} >
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>

                    <div className={styles.pricePortion} >
                        <p>Taxes</p>
                        <p>${tax.toFixed(2)}</p>
                    </div>

                    <hr className={styles.line} />

                    <div className={styles.total} >
                        <p>TOTAL</p>
                        <p>${total.toFixed(2)}</p>
                    </div>

                    <div className={styles.center}>
                        <Link to="/shipping" ><button className={`${styles.button} ${styles.hvrGrow}`} >Continue to Checkout</button></Link>
                    </div>
                </div>

            </div>
        );
    } else {
        return <></>;
    }
}