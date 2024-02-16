import React, { useState } from 'react';
import axios from 'axios';
import ImageList from './Components/ImageList/ImageList';
import SearchForm from './Components/SearchForm/SearchForm';

const API_KEY = 'G3YYz9YM-CPN8Fn7WANKl_JprD_NnU-SZRK35hPWJmc'; 
const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${API_KEY}`);
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-4 text-center text-blue-600">Image Finder</h1>

      <SearchForm onSubmit={handleSearch} />
      <div className="mt-8">
        <ImageList images={images} />
      </div>
    </div>
  );
};

export default App;
