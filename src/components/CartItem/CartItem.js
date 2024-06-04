import styles from './CartItem.module.css';

import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(props) {
    return (
        <div className={styles.containerWithImg}>

            <img src={props.src} className={styles.image} />

            <div className={styles.container} >
                <div className={styles.namePrice}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.price}>{props.price}</p>
                </div>

                <div className={styles.rectangle}>
                    <p className={styles.quantity}>-</p>
                    <p className={styles.quantityNum}>1</p>
                    <p className={styles.quantity}>+</p>
                </div>

                <DeleteIcon className={styles.delete} />
            </div>

        </div>
    );
}