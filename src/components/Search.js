const Search = ({ value }) => {
    return (
        <div className="search-box">
            <input type="search" placeholder='Search...' onChange={value} />
        </div>
    );
}

export default Search;