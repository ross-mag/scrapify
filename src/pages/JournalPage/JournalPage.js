import "./JournalPage.scss";
import { useContext } from "react";
import { SelectedSongsContext } from "../../SelectedSongsContext";
import Songs from "../../components/Songs/Songs";
import AddNotes from "../../components/AddNotes/AddNotes";

function JournalPage() {
  const { selectedSongs } = useContext(SelectedSongsContext);

  return (
    <div className="journal-page">
      <Songs selectedSongs={selectedSongs} />
      <AddNotes/>
    </div>
  );
}

export default JournalPage