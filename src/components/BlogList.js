const BLogList = ({ blogs, title, isLoading }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {isLoading && <div>Loading...</div>}
            {blogs.map((blogs, index) => (
                <div className="blogs-preview" key={index}>
                    <h2>{blogs.title}</h2>
                    <p>published At : {blogs.publishedAt}</p>
                    <img src={blogs.urlToImage} alt={blogs.title} />
                    <p>Written by : {blogs.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BLogList;