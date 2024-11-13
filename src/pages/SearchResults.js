// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:3001/search${location.search}`);
                if (!response.ok) {
                    throw new Error('No articles found');
                }
                const data = await response.json();
                setResults(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setResults([]);
            }
        };
        fetchResults();
    }, [location.search]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {error && <p className="text-red-500">{error}</p>}
            {results.map((result, index) => (
                <div key={index} className="p-4 border rounded mb-4">
                    <h3 className="text-xl font-semibold">{result.title}</h3>
                    <p>{result.description}</p>
                    <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
