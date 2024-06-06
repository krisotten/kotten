import emptyCart from '../../img/emptyCart.png';
import styles from './EmptyCart.module.css';

import {Link} from 'react-router-dom';

function EmptyCart() {
    return (
        <div className={styles.container}>
            <img src={emptyCart} className={styles.image} />
            <div className={styles.text}>
                <h1 className={styles.heading}>Your cart is empty!</h1>
                <p className={styles.description}>Head back to the home page to checkout more styles!</p>
            </div>
            <Link to="/"><button className={`${styles.button} ${styles.hvrGrow}`} >Continue Shopping</button></Link>
        </div>
    );
}

export default EmptyCart;