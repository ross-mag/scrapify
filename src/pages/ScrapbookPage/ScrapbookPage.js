import "./ScrapbookPage.scss";
import { useState, useContext } from "react";
import axios from "axios";
import Notes from "../../components/Notes/Notes";
import Songs from "../../components/Songs/Songs";
import { SelectedSongsContext } from "../../SelectedSongsContext";

function ScrapbookPage() {
  const [notes, setNotes] = useState(null);
  const { selectedSongs } = useContext(SelectedSongsContext);

  console.log("Selected Songs in scrapbookpage:", selectedSongs);

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