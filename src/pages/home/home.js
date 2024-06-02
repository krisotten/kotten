// CSS Module
import styles from './home.module.css';

// Components
import Item from '../../components/Item/Item.js';

// Images
import evilEye from "../../img/evil_eye.jpg";
import strawberry from "../../img/strawberry.jpg";
import brown from "../../img/brown.jpg";
import skull from "../../img/skull.jpg";
import mushroom from "../../img/mushroom.jpg";

function Home() {
    const list = [{name: 'Swirl Crochet Mini Bag', price: "$39.99", src: evilEye}, {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: strawberry}, {name: 'Swirl Crochet Mini Bag', price: "$39.99", src: brown}];

    return (
        <div className={styles.itemList} >
            {list.map(item => {
                return <Item name={item.name} price={item.price} src={item.src} className={styles.item} />
            })}
        </div>
    );
}

export default Home;