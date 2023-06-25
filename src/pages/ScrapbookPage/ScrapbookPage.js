import "./ScrapbookPage.scss";
import { useState } from "react";
import axios from "axios";
import Notes from "../../components/Notes/Notes";
import Songs from "../../components/Songs/Songs";

function ScrapbookPage() {
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

  const [notes, setNotes] = useState(null);

  const getNotes = () => {
    axios
      .get("http://localhost:2020/notes"
      )
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="scrapbook-page">
      <Notes notes={notes} getNotes={getNotes} />
      <Songs selectedSongs={selectedSongs} />
    </div>
  );
}

export default ScrapbookPage