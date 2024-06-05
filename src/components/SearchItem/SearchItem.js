import styles from './SearchItem.module.css';

import evilEye from '../../img/evil_eye.jpg';

function SearchItem() {
    return (
        <div>
            <img src={evilEye} className={styles.image} />
        </div>
    );
}

export default SearchItem;
