import "./Songs.scss";

function Songs({ selectedSongs }) {
  console.log("Selected Songs:", selectedSongs);

  return (
    <div className="selected-songs">
      <h3>Selected Songs:</h3>
      <ul>
        {selectedSongs &&
          selectedSongs.map((song) => (
            <div key={song.id}>
              <img src={song.album.images[1].url} alt="Cover Art" />
              <p>{song.name}</p> by <p>{song.artists[0].name}</p>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Songs