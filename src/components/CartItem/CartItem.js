import styles from './CartItem.module.css';

import DeleteIcon from '@mui/icons-material/Delete';

import { CartContext } from '../../context/CartContext.js';
import { useContext } from 'react';

export default function CartItem(props) {
    const { cart, removeItem, decrement, increment } = useContext(CartContext);

    return (
        <div className={styles.containerWithImg}>

            <img src={props.src} className={styles.image} />

            <div className={styles.container} >
                <div className={styles.namePrice}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.price}>{props.price}</p>
                </div>

                <div className={styles.rectangle}>
                    <p className={styles.minus} onClick={() => { if (props.amount > 1) { decrement(props.name) } }} >-</p>
                    <p className={styles.quantityNum}>{props.amount}</p>
                    <p className={styles.plus} onClick={() => increment(props.name)} >+</p>
                </div>

                <DeleteIcon className={`${styles.delete} ${styles.hvrGrow}`} onClick={() => { removeItem({name: props.name, price: props.price, src: props.src, amount: props.amount})} } />
            </div>

        </div>
    );
}