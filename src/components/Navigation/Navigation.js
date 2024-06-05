import styles from './Navigation.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import kotten from '../../img/kotten.png';
import search from '../../img/search.png';
import menu from '../../img/menu.png';
import cartImg from '../../img/cart.png';

import {Link} from 'react-router-dom';

import {useContext} from 'react';
import {CartContext} from '../../context/CartContext.js';

function Navigation() {
    const { cart } = useContext(CartContext);

    let total = 0;
    cart.forEach(item => total += item.amount);

    let cartDot = <></>;

    if (total > 0) {
        cartDot = <div className={styles.dot}><p className={styles.cartNum}>{total}</p></div>;
    }

    return (
        <>
            <nav>
                <img src={menu} className={styles.menu} />
                <Link to="/" ><img src={kotten} className={styles.kotten} /></Link>
                <div className={styles.rightNav} >
                    <div className={styles.searchDiv}>
                        <input className={styles.rectangle} placeholder="Search" />
                        <img src={search} className={styles.search}/>
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