import styles from './Item.module.css';
import evilEye from "./../../img/evil_eye.jpg";

function Item(props) {
    return (
        <div className={styles.item} >
            <img src={props.src} className={styles.rectangle} />
            <div className={styles.itemText} >
                <p className={styles.name} >{props.name}</p>
                <p className={styles.price} >{props.price}</p>
            </div>
        </div>
    );
}

export default Item;