import styles from './Navigation.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Navigation() {
    return (
        <>
            <nav>
                <MenuIcon />
                <div>
                    <SearchIcon />
                    <ShoppingBagIcon />
                </div>
            </nav>
        </>
    );
}

export default Navigation;