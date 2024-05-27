import styles from './Navigation.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import kotten from '../../img/kotten.png';

function Navigation() {
    return (
        <>
            <nav>
                <MenuIcon className={styles.navIcons} />
                <img src={kotten} className={styles.kotten} />
                <div className={styles.rightNav} >
                    <SearchIcon className={styles.navIcons} />
                    <ShoppingBagIcon className={styles.navIcons} />
                </div>
            </nav>
        </>
    );
}

export default Navigation;