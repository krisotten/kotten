import { useLocation } from 'react-router-dom';
import SearchItem from '../../components/SearchItem/SearchItem.js';

function Search() {
    const location = useLocation();
    const search = location.state;

    return (
        <SearchItem />
    );
}

export default Search;