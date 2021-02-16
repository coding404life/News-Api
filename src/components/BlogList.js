import { Link } from "react-router-dom";

const BLogList = ({ blogs, title, isLoading }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {isLoading && <div>Loading...</div>}
            {blogs.map((blog, index) => (
                <div className="blogs-preview" key={index} id={index}>
                    <Link to={`/blogs/${index}`}>
                        <h2>{blog.title}</h2>
                        <p>published At : {blog.publishedAt}</p>
                        <img src={blog.urlToImage} alt={blog.title} />
                        <p>Written by : {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BLogList;