import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import axios from 'axios';

const Home = ({ searchTerms }) => {
    const [ blogs, setBlogs ] = useState([]);

    const results = blogs.filter(blogs => {
        return blogs.title.toLowerCase().includes(searchTerms.toLocaleLowerCase().trim());
    });

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blogs => blogs.id !== id);
    //     setBlogs(newBlogs)
    // }

    //fetch blogs data
    const fetchData = async () => {
        axios(`http://newsapi.org/v2/top-headlines?country=us&apiKey=1c164b9f9b094135952eef36b26a7dac`)
            .then(res => {
                console.log(res.data);
                setBlogs(res.data.articles);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id="Homepage">
            <BlogList blogs={results} title='New Articles' />
        </div>
    );
}

export default Home;