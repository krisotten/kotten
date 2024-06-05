import styles from './shipping.module.css';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ShipCartItem from '../../components/ShipCartItem/ShipCartItem.js';

import { CartContext } from '../../context/CartContext.js';
import { useContext, useState } from 'react';

import {useLocation} from 'react-router-dom';

export default function Shipping() {
    const { cart } = useContext(CartContext);

    const location = useLocation();
    const state = location.state;
    const {subtotal, tax, shipping, total} = state;

    const [email, setEmail] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [city, setCity] = useState("");
    const [addressState, setState] = useState("");
    const [zip, setZip] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.textContainer} >
                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Contact</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <input className={styles.rectangle} placeholder="Email *" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <div className={styles.headContainer}>
                        <p className={styles.heading}>Shipping Address</p>
                        <p className={styles.required}>* Required</p>
                    </div>

                    <div className={styles.address}>
                        <div className={styles.twoRect}>
                            <input className={styles.rectangle} placeholder="First Name *" onChange={(e) => setFirst(e.target.value)}/>
                            <input className={styles.rectangle} placeholder="Last Name *" onChange={(e) => setLast(e.target.value)}/>
                        </div>

                        <input className={styles.rectangle} placeholder="Address *" onChange={(e) => setAddress(e.target.value)}/>
                        <input className={styles.rectangle} placeholder="Apartment, suite, etc. (optional) *" onChange={(e) => setApartment(e.target.value)}/>

                        <div className={styles.threeRect}>
                            <input className={styles.rectangle} placeholder="City *" onChange={(e) => setCity(e.target.value)}/>
                            <input className={styles.rectangle} placeholder="State *" onChange={(e) => setState(e.target.value)}/>
                            <input className={styles.rectangle} placeholder="Zip *" onChange={(e) => setZip(e.target.value)}/>
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