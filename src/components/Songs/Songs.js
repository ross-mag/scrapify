import "./Songs.scss";

function Songs({ selectedSongs }) {
  return (
    <div className="songs">
      <div className="selected-songs">
        <h3>Selected Songs:</h3>
        <ul>
          {selectedSongs.map((song) => (
            <li key={song.id}>
              <p>{song.name}</p> by <p>{song.artists[0].name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Songs