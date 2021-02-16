import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, isLoading } = useFetch(`http://newsapi.org/v2/top-headlines?country=eg&apiKey=1c164b9f9b094135952eef36b26a7dac`);

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {!isLoading && (
                <article>
                    <h2>{blogs[ id ].title}</h2>
                    <p>Written by : {blogs[ id ].author}</p>
                    <img src={blogs[ id ].urlToImage} alt={blogs[ id ].title} />
                    <div>{blogs[ id ].content}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;