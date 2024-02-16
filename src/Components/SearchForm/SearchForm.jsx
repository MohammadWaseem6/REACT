import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
     <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search for images..."
  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
/>

     <button type="submit" className="border-2 border-gray-400 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">
  Search
</button>

    </form>
  );
};

export default SearchForm;
