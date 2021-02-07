import Search from './Search';

const Navbar = ({ handleSearchInput }) => {
    return (
        <nav id="Navbar">
            <h1>Yahya Blog</h1>
            <div className="links">
                <Search value={handleSearchInput} />
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;