import { CartContext } from '../../context/CartContext.js';
import { useContext, useState } from 'react';

import {useLocation} from 'react-router-dom';

import styles from './billing.module.css';

import ShipCartItem from '../../components/ShipCartItem/ShipCartItem.js';

function Billing() {
    const { cart } = useContext(CartContext);

    const location = useLocation();
    const state = location.state;
    const {subtotal, tax, shipping, total} = state;
    
    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Cardholder Name</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <div className={styles.twoRect}>
                        <input className={styles.rectangle} placeholder="First Name *"/>
                        <input className={styles.rectangle} placeholder="Last Name *"/>
                    </div>
                </div>

                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Card Details</p>
                        <p className={styles.required}>* Required</p>
                    </div>
                    <div className={styles.address}>
                        <input className={styles.rectangle} placeholder="1234 5678 9123 4567 *"/>

                        <div className={styles.twoRect}>
                            <input className={styles.rectangle} placeholder="MM/YY *"/>
                            <input className={styles.rectangle} placeholder="CVV *"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Billing Address</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <div className={styles.address}>
                        <div className={styles.twoRect}>
                            <input className={styles.rectangle} placeholder="First Name *"/>
                            <input className={styles.rectangle} placeholder="Last Name *"/>
                        </div>

                        <input className={styles.rectangle} placeholder="Address *"/>
                        <input className={styles.rectangle} placeholder="Apartment, suite, etc. (optional) *"/>

                        <div className={styles.threeRect}>
                            <input className={styles.rectangle} placeholder="City *"/>
                            <input className={styles.rectangle} placeholder="State *"/>
                            <input className={styles.rectangle} placeholder="Zip *"/>
                        </div>
                    </div>
                </div>

            </div>

            <div class={styles.priceContainer} >
                <div className={styles.cartItems}>
                    {cart.map(item => {
                        return <ShipCartItem src={item.src} name={item.name} price={item.price} amount={item.amount} />
                    })}
                </div>

                <hr className={styles.line}/>

                <div className={styles.price}>
                    <div className={styles.pricePortion} >
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>

                    <div className={styles.pricePortion} >
                        <p>Shipping</p>
                        <p>${shipping}</p>
                    </div>

                    <div className={styles.pricePortion} >
                        <p>Taxes</p>
                        <p>${tax}</p>
                    </div>

                    <div className={styles.total} >
                        <p>TOTAL</p>
                        <p>${total}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Billing;