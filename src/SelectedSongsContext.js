import React, { createContext, useState } from 'react';

const SelectedSongsContext = createContext();

const SelectedSongsProvider = ({ children }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);

  const submitSongs = () => {
    setSelectedSongs([]);
  };

  return (
    <SelectedSongsContext.Provider value={{ selectedSongs, setSelectedSongs, submitSongs }}>
      {children}
    </SelectedSongsContext.Provider>
  );
};

export { SelectedSongsContext, SelectedSongsProvider };
