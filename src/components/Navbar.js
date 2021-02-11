import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = ({ handleSearchInput }) => {

    return (
        <nav id="Navbar">
            <h1>Yahya Blog</h1>
            <div className="links">
                <Search value={handleSearchInput} />
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;