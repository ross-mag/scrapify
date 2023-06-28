import "./Songs.scss";

function Songs({ selectedSongs }) {

  return (
    <div className="scrapbook-songs__container">
      <ul className="scrapbook-songs">
        {selectedSongs.map((song) => (
          <div key={song.id} className="scrapbook-songs__song-container">
            {song.album?.images[1]?.url && (
              <div className="scrapbook-song__image-container">
                <img className="scrapbook-song__image" src={song.album.images[1].url} alt="Song Cover Art" />
              </div>
            )}
            <div className="scrapbook-song__info-container">
              <p className="scrapbook-song__song-name">{song.name}</p>
              <p className="scrapbook-song__artist-name">{song.artists?.[0]?.name ?? 'Unknown Artist'}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Songs