import "./ScrapbookPage.scss";
import { useContext } from "react";
import Notes from "../../components/Notes/Notes";
import Songs from "../../components/Songs/Songs";
import { SelectedSongsContext } from "../../SelectedSongsContext";

function ScrapbookPage() {
  const { selectedSongs } = useContext(SelectedSongsContext);

  return (
    <div className="scrapbook-page">
      <Songs selectedSongs={selectedSongs} />
      <Notes/>
    </div>
  );
}

export default ScrapbookPage