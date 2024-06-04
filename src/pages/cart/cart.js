import styles from './cart.module.css';
import CartItem from '../../components/CartItem/CartItem.js';

import { Link } from 'react-router-dom';

import evilEye from "../../img/evil_eye.jpg";
import strawberry from "../../img/strawberry.jpg";
import brown from "../../img/brown.jpg";

export default function cart() {
    const list = [{name: 'Evil Eye Bag', price: "$39.99", src: evilEye}, {name: 'Strawberry Bag', price: "$39.99", src: strawberry}, {name: 'Brown Heart Bag', price: "$39.99", src: brown}];

    return (
        <div className={styles.itemList}>
            {list.map(item => {
                return <CartItem src={item.src} name={item.name} price={item.price} />
            })}
        </div>
    );
}