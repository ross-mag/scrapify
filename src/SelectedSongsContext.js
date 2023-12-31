import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const SelectedSongsContext = createContext();

const SelectedSongsProvider = ({ children }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/selectedSongs')
      .then((response) => {
        setSelectedSongs(response.data.map((song) => ({ ...song, coverArt: '' })));
        console.log('Selected songs retrieved from the server');
      })
      .catch((error) => {
        console.error('Error retrieving selected songs:', error);
      });
  }, []);  

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + '/selectedSongs', { song: selectedSongs })
      .then(() => {
        console.log('Selected songs updated on the server');
      })
      .catch((error) => {
        console.error('Error updating selected songs:', error);
      });
  }, [selectedSongs]);

  return (
    <SelectedSongsContext.Provider value={{ selectedSongs, setSelectedSongs }}>
      {children}
    </SelectedSongsContext.Provider>
  );
};

export { SelectedSongsContext, SelectedSongsProvider };