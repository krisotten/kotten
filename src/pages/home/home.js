import React from 'react';
import { Link } from 'react-router-dom';

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
    const MyContext = React.createContext();

    const list = [{name: 'Evil Eye Bag', price: "$39.99", src: evilEye}, {name: 'Strawberry Bag', price: "$39.99", src: strawberry}, {name: 'Brown Heart Bag', price: "$39.99", src: brown}, {name: 'Skull Crochet Bag', price: "$39.99", src: skull}, {name: 'Mushroom Bag', price: "$39.99", src: mushroom}];

    return (
        <div className={styles.itemList}>
            {list.map(item => {
                return (<Link key={list.indexOf(item)} to={`/${item.name.replaceAll(' ', '_').toLowerCase()}`}> 
                    <MyContext.Provider value={item}>
                        <Item name={item.name} price={item.price} src={item.src} /> 
                    </MyContext.Provider>
                </Link>)
            })}
        </div>
    );
}

export default Home;