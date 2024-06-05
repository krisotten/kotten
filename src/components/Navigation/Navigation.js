import styles from './Navigation.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import kotten from '../../img/kotten.png';

import {Link} from 'react-router-dom';

import {useContext} from 'react';
import {CartContext} from '../../context/CartContext.js';

function Navigation() {
    const { cart } = useContext(CartContext);
    let cartNumber = cart.length;
    let cartDot = <></>;

    if (cartNumber > 0) {
        cartDot = <div className={styles.dot}><p className={styles.cartNum}>{cartNumber}</p></div>;
    }

    return (
        <>
            <nav>
                <MenuIcon className={styles.navIcons} />
                <Link to="/" ><img src={kotten} className={styles.kotten} /></Link>
                <div className={styles.rightNav} >
                    <SearchIcon className={styles.navIcons}/>
                    <Link to="/cart">
                        <div className={styles.cart}>
                            <ShoppingBagIcon className={styles.cartIcon} />
                            {cartDot}
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navigation;