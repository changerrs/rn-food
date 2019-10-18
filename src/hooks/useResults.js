import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); //empty array because yelp should give us big array.
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        console.log('hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                },
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log('ERRRORRRR');
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    //call search api when component is first rendered
    // searchApi('pasta');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};
