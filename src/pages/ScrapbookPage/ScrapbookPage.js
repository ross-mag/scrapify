import "./ScrapbookPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "../../components/Notes/Notes";
import Songs from "../../components/Songs/Songs";
import { SelectedSongsProvider } from '../../SelectedSongsContext';

function ScrapbookPage() {
  const [notes, setNotes] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    getSelectedSongs();
  }, []);

  const getSelectedSongs = async () => {
    try {
      const response = await
        axios
          .get("http://localhost:2020/selectedSongs");
      setSelectedSongs(response.data);
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

  const getNotes = () => {
    axios
      .get("http://localhost:2020/notes")
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <SelectedSongsProvider>
      <div className="scrapbook-page">
        <Notes notes={notes} getNotes={getNotes} />
        <Songs selectedSongs={selectedSongs} />
      </div>
    </SelectedSongsProvider>

  );
}

export default ScrapbookPage