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
                const slicedResults = data.slice(0, 8);
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
      <form onSubmit={handleSearch} className="search__form">
        <input
          type="text"
          className="search__input"
          value={searchQuery}
          placeholder="search for music"
          onChange={handleSearchQueryChange}
        />
        <button className="search__submit" type="submit">Search</button>
      </form>
      <div className="songs">
        <div className="search-results">
          <div className="search-results__button-container">
            {searchResults && searchResults.map((song) => (
              <button
                key={song.id}
                onClick={() => handleSongSelect(song)}
                className={selectedSongs.some((selectedSong) => selectedSong.id === song.id) ? 'selected' : 'unselected'}
              >
                <div className="search-results__item-container">
                  <div className="search-results__song-details-container">
                    <div className="song-details__cover-art-container">
                      {song.album?.images[2]?.url && (
                        <img src={song.album.images[2].url} className="cover-art" alt="Cover Art" />
                      )}
                    </div>
                    <div className="song-details__text-container">
                      <div className="song-details__song-container">
                        <p className="song-details__song-name">{song.name}</p>
                        <p className="song-details__song-artist">{song.artists[0].name}</p>
                      </div>
                      <div className="song-details__song-album-container">
                        <p className="song-details__song-album">{song.album.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </button>
            ))}
          </div>
        </div>
        <div className="selected-songs">
          <h2 className="selected-songs__header">Selected Songs:</h2>
          <ul>

            {selectedSongs.map((song) => (
              <div key={song.id} className="selected-songs__song-container">

                {song.album?.images[1]?.url && (
                  <div className="selected-song__image-container">
                    <img className="selected-song__image" src={song.album.images[1].url} alt="Song Cover Art" />
                  </div>
                )}

                <div className="selected-song__info-container">
                  <p className="selected-song__song-name">{song.name}</p>
                  <p className="selected-song__artist-name">by {song.artists?.[0]?.name ?? 'Unknown Artist'}</p>
                </div>

                <button className="selected-song__button-remove" onClick={() => handleSongRemove(song)}>Remove</button>

              </div>
            ))}

          </ul>
        </div>
      </div>

    </div>
  );
}

export default Search
