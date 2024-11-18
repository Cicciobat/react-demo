import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("db")) || [];
        const filteredResults = data.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
    }, [query]);

    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <ul className="list-group">
                    {results.map((result, index) => (
                        <li key={index} className="list-group-item">
                            {result}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-danger">No results found for "{query}"</p>
            )}
        </div>
    );
};

export default SearchResults;
