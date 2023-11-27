import React, { useState, useEffect } from 'react';
import '../../styles/dashboard.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className='search-bar'>
      <input
        type="text"
        placeholder="Search labels..."
        value={searchQuery}
        onChange={handleInputChange}
        className='search-labels'
      />
      <button type="submit" className='search-label-btn'>
        Search
      </button>
    </form>
  );
};

function Dashboard() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await fetch('http://localhost:8080/get-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setImages(result.images);
        setFilteredImages(result.images);
      } else {
        console.error('Error fetching images:', response.statusText);
      }
    } catch (error) {
      console.error('Error during image fetch:', error.message);
    }
  };

  const handleSearch = (query) => {
    const searchWords = query.toLowerCase().split(/\s+/);

    const filtered = images.filter((image) =>
      searchWords.some((word) =>
        image.labels.toLowerCase().includes(word)
      )
    );

    setFilteredImages(filtered);
  };

  const handleImageClick = (fileName) => {
    navigator.clipboard.writeText(fileName)
      .then(() => {
        console.log('File name copied to clipboard:', fileName);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <>
      <div className='user-dashboard'>
        <div className="dashboard">
          <div className="gallery-title">
            <h1 className='gallery-head'>Gallery</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="gallery">
            {filteredImages.map((image, index) => (
              <div key={index} className="image-container" onClick={() => handleImageClick(image.file_name)}>
                <img src={`https://raw.githubusercontent.com/anushka2911/images/main/uploads/${image.file_name}`} alt={image.file_name} className="image" />
                <p className="image-labels">{image.labels}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
