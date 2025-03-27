import React, { useState } from 'react';
import '../css/searchbar.css'; 

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for..."
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;