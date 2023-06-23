import "./Search.scss";
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const accessTokenResponse = await axios.get('http://localhost:2020/getAccessToken');
      if (accessTokenResponse.status === 200) {
        const accessTokenData = accessTokenResponse.data;
        const accessToken = accessTokenData.access_token;

        const searchResponse = await
          axios
            .get(`http://localhost:2020/search?query=${encodeURIComponent(searchQuery)}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            });

        if (searchResponse.status === 200) {
          const data = searchResponse.data;
          setSearchResults(data);
        } else {
          console.error('Error:', searchResponse.data.error);
        }
      } else {
        console.error('Error:', accessTokenResponse.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* Display search results */}
      {searchResults.map((song) => (
        <div key={song.id}>{song.name}</div>
      ))}
    </div>
  );
}

export default Search;