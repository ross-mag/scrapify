import "./Search.scss";
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SelectedSongsContext } from '../../SelectedSongsContext';

function Search() {
  const { selectedSongs, setSelectedSongs } = useContext(SelectedSongsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSongSelect = (song) => {
    const isSelected = selectedSongs.some((selectedSong) => selectedSong.id === song.id);

    if (isSelected) {
      setSelectedSongs((prevSelectedSongs) =>
        prevSelectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    } else if (selectedSongs.length < 3) {
      setSelectedSongs((prevSelectedSongs) => [...prevSelectedSongs, song]);
    }

    console.log("Selected Songs:", selectedSongs);

    axios.post("http://localhost:2020/selectedSongs", { song })
      .then(() => {
        console.log("Selected songs updated on the server");
      })
      .catch((error) => {
        console.error("Error updating selected songs:", error);
      });
  };

  const handleSongRemove = (song) => {
    setSelectedSongs((prevSelectedSongs) =>
      prevSelectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
    );

    console.log("Selected Songs:", selectedSongs);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get('http://localhost:2020/getAccessToken')
      .then((accessTokenResponse) => {
        if (accessTokenResponse.status === 200) {
          const accessTokenData = accessTokenResponse.data;
          const accessToken = accessTokenData.access_token;

          axios
            .get(`http://localhost:2020/search?query=${encodeURIComponent(searchQuery)}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            })
            .then((searchResponse) => {
              if (searchResponse.status === 200) {
                const data = searchResponse.data;
                const slicedResults = data.slice(0, 5);
                setSearchResults(slicedResults);
              } else {
                console.error('Error:', searchResponse.data.error);
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          console.error('Error:', accessTokenResponse.data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
      {searchResults && searchResults.map((song) => (
        <button
          key={song.id}
          onClick={() => handleSongSelect(song)}
          className={selectedSongs.some((selectedSong) => selectedSong.id === song.id) ? 'selected' : 'unselected'}
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
            <div key={song.id}>
              <img src={song.album.images[1].url} alt="Cover Art" />
              <p>{song.name}</p> by <p>{song.artists[0].name}</p>
              <button onClick={() => handleSongRemove(song)}>Remove</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search
