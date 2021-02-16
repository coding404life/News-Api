import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    //fetch some data
    useEffect(() => {
        let isRendered = false;
        axios.get(url)
            .then(res => {
                if (!isRendered) {
                    console.log(res.data.articles);
                    setData(res.data.articles);
                    setIsLoading(false);
                    setError(null)
                }
            }).catch(err => {
                setIsLoading(false);
                setError(err.message)
            })
        return () => {
            isRendered = true;
        }
    }, [ url ]);

    return { data, isLoading, error }
}

export default useFetch;