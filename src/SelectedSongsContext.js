import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const SelectedSongsContext = createContext();

const SelectedSongsProvider = ({ children }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:2020/selectedSongs')
      .then((response) => {
        setSelectedSongs(response.data);
        console.log('Selected songs retrieved from the server');
      })
      .catch((error) => {
        console.error('Error retrieving selected songs:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:2020/selectedSongs', { song: selectedSongs })
      .then(() => {
        console.log('Selected songs updated on the server');
      })
      .catch((error) => {
        console.error('Error updating selected songs:', error);
      });
  }, [selectedSongs]);

  const submitSongs = () => {
    setSelectedSongs([]);
    console.log(selectedSongs);
  };

  return (
    <SelectedSongsContext.Provider value={{ selectedSongs, setSelectedSongs, submitSongs }}>
      {children}
    </SelectedSongsContext.Provider>
  );
};

export { SelectedSongsContext, SelectedSongsProvider };