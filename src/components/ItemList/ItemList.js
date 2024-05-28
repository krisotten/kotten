import Item from '../Item/Item.js';
import styles from './ItemList.module.css';

function ItemList(props) {
    return (
        <div className={styles.itemList} >
            {props.list.map(item => {
                return <Item name={item.name} price={item.price} />
            })}
        </div>
    );
}

export default ItemList;
