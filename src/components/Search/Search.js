import "./Search.scss";
import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

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
          const slicedResults = data.slice(0, 10);
          setSearchResults(slicedResults);
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

  const handleSongSelect = (song) => {
    const isSelected = selectedSongs.some((selectedSong) => selectedSong.id === song.id);

    if (isSelected) {
      setSelectedSongs((prevSelectedSongs) =>
        prevSelectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    } else if (selectedSongs.length < 3) {
      setSelectedSongs((prevSelectedSongs) => [...prevSelectedSongs, song]);
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
      {searchResults.map((song) => (
        <button
          key={song.id}
          onClick={() => handleSongSelect(song)}
          className={selectedSongs.some((selectedSong) => selectedSong.id === song.id) ? 'selected' : ''}
        >
          <div>
            <p>{song.name}</p> by <p>{song.artists[0].name}</p>
          </div>
          <p>
            {selectedSongs.some((selectedSong) => selectedSong.id === song.id) ? 'Deselect' : 'Select'}
          </p>
        </button>
      ))}
      <div className="selected-songs">
        <h3>Selected Songs:</h3>
        <ul>
          {selectedSongs.map((song) => (
            <li key={song.id}>
              <p>{song.name}</p> by <p>{song.artists[0].name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;