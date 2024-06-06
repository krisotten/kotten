import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './search.module.css';

import Item from '../../components/Item/Item.js';

import {ItemContext} from '../../context/ItemContext.js';

function Search() {
    const location = useLocation();
    const search = location.state;

    const list = useContext(ItemContext);
    
    const matches = list.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <p className={styles.header}>Results for "{search}"</p>
            <div className={styles.itemList} >
                {matches.map(item => {
                    return (<Link key={list.indexOf(item)} to={{pathname: `/${item.name.replaceAll(' ', '_').toLowerCase()}`}} state={item}> 
                        <Item src={item.src} name={item.name} price={item.price} />
                    </Link>)
                })}
            </div>
        </>
    );
    
}

export default Search;