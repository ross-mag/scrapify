import "./Songs.scss";

function Songs({ selectedSongs }) {
  return (
    <div className="selected-songs">
      <h3>Selected Songs:</h3>
      <ul>
        {selectedSongs.map((song) => (
          <div key={song.id}>
            <p>{song.name}</p> by <p>{song.artists[0].name}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Songs