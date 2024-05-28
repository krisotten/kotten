import styles from './Item.module.css';

function Item(props) {
    return (
        <div className={styles.item} >
            <div className={styles.rectangle} />
            <div className={styles.itemText} >
                <p className={styles.name} >{props.name}</p>
                <p className={styles.price} >{props.price}</p>
            </div>
        </div>
    );
}

export default Item;