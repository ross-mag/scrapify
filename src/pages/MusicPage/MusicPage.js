import Search from "../../components/Search/Search";
import { SelectedSongsProvider } from '../../SelectedSongsContext';

function MusicPage() {
  return (
    <SelectedSongsProvider>
      <div className="music-page">
        <Search />
      </div>
    </SelectedSongsProvider>
  );
}

export default MusicPage;
