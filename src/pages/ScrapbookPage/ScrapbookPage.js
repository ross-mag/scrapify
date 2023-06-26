import "./ScrapbookPage.scss";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Notes from "../../components/Notes/Notes";
import Songs from "../../components/Songs/Songs";
import { SelectedSongsContext } from "../../SelectedSongsContext";

function ScrapbookPage() {
  const { selectedSongs, setSelectedSongs } = useContext(SelectedSongsContext);
  const [notes, setNotes] = useState(null);

  console.log("Selected Songs in scrapbookpage:", selectedSongs);

  useEffect(() => {
    setSelectedSongs(selectedSongs);
  }, [selectedSongs, setSelectedSongs]);

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
    <div className="scrapbook-page">
      <Notes notes={notes} getNotes={getNotes} />
      <Songs selectedSongs={selectedSongs} />
    </div>
  );
}

export default ScrapbookPage