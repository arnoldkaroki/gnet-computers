import React, { useState } from 'react';
import '../css/searchbar.css'; // Optional: Import a CSS file for styling

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value); // Call the onSearch function passed as a prop
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        onSearch(query); // Call the onSearch function with the current query
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