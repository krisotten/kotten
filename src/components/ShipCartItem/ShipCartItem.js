import styles from './ShipCartItem.module.css';

export default function ShipCartItem(props) {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <img src={props.src} className={styles.image} />
                <div className={styles.dot}><p className={styles.cartNum}>{props.amount}</p></div>
            </div>
            <div className={styles.textContainer}>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}