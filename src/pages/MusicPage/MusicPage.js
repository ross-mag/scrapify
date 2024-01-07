import "./MusicPage.scss";
import Search from "../../components/Search/Search";

function MusicPage() {

  return (
    <div className="music-page">
      <div className="music-page__header-container">
        <h3 className="music-page__header">
          Lookup artists, albums, or song titles
        </h3>
      </div>
      <Search />
    </div>
  );
}

export default MusicPage;