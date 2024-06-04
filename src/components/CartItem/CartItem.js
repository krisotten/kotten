import evilEye from "../../img/evil_eye.jpg";

import styles from './CartItem.module.css';

import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem() {
    return (
        <div className={styles.containerWithImg}>

            <img src={evilEye} className={styles.image} />

            <div className={styles.container} >
                <div>
                    <p>Swirl Crochet Bag</p>
                    <p>$39.99</p>
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