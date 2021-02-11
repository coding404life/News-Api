import useFetch from '../Hooks/useFetch'
import BlogList from './BlogList';

const Home = ({ searchTerms }) => {
    const { data: blogs, isLoading, error } = useFetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=1c164b9f9b094135952eef36b26a7dac`);

    const results = blogs.filter(blogs => {
        return blogs.title.toLowerCase().includes(searchTerms.toLocaleLowerCase().trim());
    });

    return (
        <div id="Homepage">
            {error && <div>{error}</div>}
            <BlogList blogs={results} title='New Articles' isLoading={isLoading} />
        </div>
    );
}

export default Home;