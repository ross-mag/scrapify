import "./Songs.scss";

function Songs({ selectedSongs }) {

  return (
    <div className="songs">
      <ul className="selected-songs">
        {selectedSongs.map((song) => (
          <div key={song.id} className="selected-songs__song-container">
            {song.album?.images[1]?.url && (
              <div className="selected-song__image-container">
                <img className="selected-song__image" src={song.album.images[1].url} alt="Song Cover Art" />
              </div>
            )}
            <div className="selected-song__info-container">
              <p className="selected-song__song-name">{song.name}</p>
              <p className="selected-song__artist-name">{song.artists?.[0]?.name ?? 'Unknown Artist'}</p>
            </div>
          </div>
        ))}
        {/* <div className="songs">
          {selectedSongs &&
            selectedSongs.map((song) => (
              <div key={song.id}>
                {song.album?.images[1]?.url && (
                  <img src={song.album.images[1].url} alt="Cover Art" />
                )}
                <p>{song.name}</p> by <p>{song.artists?.[0]?.name ?? 'Unknown Artist'}</p>
              </div>
            ))}
        </div> */}
      </ul>
    </div>
  );
}

export default Songs