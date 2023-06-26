import Search from "../../components/Search/Search";
import { useContext } from "react";
import { SelectedSongsContext } from "../../SelectedSongsContext";

function MusicPage() {
  const { selectedSongs } = useContext(SelectedSongsContext);

  console.log("Selected Songs in MusicPage:", selectedSongs);

  return (
    <div className="music-page">
      <Search />
    </div>
  );
}

export default MusicPage;
