import styles from './Navigation.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import kotten from '../../img/kotten.png';

import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav>
                <MenuIcon className={styles.navIcons} />
                <Link to="/" ><img src={kotten} className={styles.kotten} /></Link>
                <div className={styles.rightNav} >
                    <SearchIcon className={styles.navIcons} />
                    <ShoppingBagIcon className={styles.navIcons} />
                </div>
            </nav>
        </>
    );
}

export default Navigation;