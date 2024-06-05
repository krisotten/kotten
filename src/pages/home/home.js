import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// CSS Module
import styles from './home.module.css';

// Components
import Item from '../../components/Item/Item.js';

// Context
import {ItemContext} from '../../context/ItemContext.js';

function Home() {
    const list = useContext(ItemContext);

    return (
        <div className={styles.container}>
            <div className={styles.itemList}>
                {list.map(item => {
                    return (<Link key={list.indexOf(item)} to={{pathname: `/${item.name.replaceAll(' ', '_').toLowerCase()}`}} state={item}> 
                        <Item src={item.src} name={item.name} price={item.price} />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default Home;