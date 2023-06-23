import "./MusicPage.scss";
import React, { useState } from 'react';
import Search from "../../components/Search/Search";

function MusicPage() {
  const [selectedSongs, setSelectedSongs] = useState([]);


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
    <div className="music-page">
      <Search selectedSongs={selectedSongs} handleSongSelect={handleSongSelect} />
    </div>
  );
}

export default MusicPage