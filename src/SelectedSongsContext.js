import React, { createContext, useState } from 'react';

const SelectedSongsContext = createContext();

const SelectedSongsProvider = ({ children }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [songCoverArt, setSongCoverArt] = useState({});

  const submitSongs = () => {
    setSelectedSongs([]);
    setSongCoverArt({});
  };

  return (
    <SelectedSongsContext.Provider value={{ selectedSongs, setSelectedSongs, submitSongs, songCoverArt }}>
      {children}
    </SelectedSongsContext.Provider>
  );
};

export { SelectedSongsContext, SelectedSongsProvider };
