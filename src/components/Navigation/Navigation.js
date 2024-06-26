import styles from './Navigation.module.css';

import kotten from '../../img/kotten.png';
import search from '../../img/search.png';
import menu from '../../img/menu.png';
import cartImg from '../../img/cart.png';

import {Link} from 'react-router-dom';

import {useContext, useState} from 'react';
import {CartContext} from '../../context/CartContext.js';

function Navigation() {
    const { cart } = useContext(CartContext);

    let total = 0;
    cart.forEach(item => total += item.amount);

    let cartDot = <></>;

    if (total > 0) {
        cartDot = <div className={styles.dot}><p className={styles.cartNum}>{total}</p></div>;
    }

    const [searchTerm, setTerm] = useState("");

    return (
        <>
            <nav>
                <img src={menu} className={styles.menu} />
                <Link to="/" ><img src={kotten} className={styles.kotten} /></Link>
                <div className={styles.rightNav} >
                    <div className={styles.searchDiv}>
                        <input className={styles.rectangle} placeholder="Search" onChange={(e) => setTerm(e.target.value)} />
                        <Link to="/search" state={searchTerm} ><img src={search} className={styles.search}/></Link>
                    </div>

                    <Link to="/cart">
                        <div className={styles.cart}>
                            <img src={cartImg} className={styles.cartIcon} />
                            {cartDot}
                        </div>
                    </Link>
                </div>
            </nav>
            
        </>
    );
}

export default Navigation;