import { useLocation } from 'react-router-dom';

function Search() {
    const location = useLocation();
    const search = location.state;
}

export default Search;