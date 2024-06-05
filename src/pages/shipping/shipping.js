import styles from './shipping.module.css';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ShipCartItem from '../../components/ShipCartItem/ShipCartItem.js';

import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';

import {useLocation} from 'react-router-dom';

export default function Shipping() {
    const { cart } = useContext(CartContext);

    const location = useLocation();
    const state = location.state;
    const {subtotal, tax, shipping, total} = state;

    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Contact</p>
                        <p className={styles.required}>* Required</p>
                    </div>
                    <div className={styles.rectangle}>
                        <p className={styles.boxText}>Email *</p>
                    </div>
                </div>

                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Shipping Address</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <div className={styles.address}>
                        <div className={styles.twoRect}>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>First Name *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>Last Name *</p>
                            </div>
                        </div>

                        <div className={styles.rectangle}>
                            <p className={styles.boxText}>Address *</p>
                        </div>

                        <div className={styles.rectangle}>
                            <p className={styles.boxText}>Apartment, suite, etc. (optional) *</p>
                        </div>

                        <div className={styles.threeRect}>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>City *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>State *</p>
                            </div>
                            <div className={styles.smallRect}>
                                <p className={styles.boxText}>Zip *</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <Link to="/cart" ><ArrowBackIcon className={`${styles.backButton} ${styles.hvrGrow}`} /></Link>
                    <button className={`${styles.button} ${styles.hvrGrow}`}>Continue to Billing</button>
                </div>

            </div>

            <div class={styles.priceContainer} >
                <div className={styles.cartItems}>
                    {cart.map(item => {
                        return <ShipCartItem src={item.src} name={item.name} price={item.price} />
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