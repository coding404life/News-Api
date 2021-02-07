import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = ({ searchTerms }) => {

    const [ blogs, setBlogs ] = useState([
        { title: 'My new website', body: 'lorem ', auther: 'yahya', id: 1 },
        { title: 'Welcome party', body: 'Hello welcome to the party ', auther: 'ahmed', id: 2 },
        { title: 'React is noice', body: 'React is amazing library', auther: 'mohamed', id: 3 },
    ]);

    const results = blogs.filter(blogs => {
        return blogs.title.toLowerCase().includes(searchTerms.toLocaleLowerCase().trim());
    });

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogs => blogs.id !== id);
        setBlogs(newBlogs)
    }

    return (
        <div id="Homepage">
            <BlogList blogs={results} title='All Blogs!' handleDelete={handleDelete} />
        </div>
    );
}

export default Home;