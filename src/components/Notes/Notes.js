import "./Notes.scss";
import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const recentNotes = storedNotes.slice(-1);
    setNotes(recentNotes);
  }, []);

  return (
    <div className="notes">
      <ul className="notes__list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div className="notes__container" key={index}>
              <div className="notes__item-container">
                <p className="notes__item">
                  {note.content1}
                </p>
              </div>
              <div className="notes__item-container">
                <p className="notes__item">
                  {note.content2}
                </p>
              </div>
              <div className="notes__item-container">
                <p className="notes__item">
                  {note.content3}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>Loading notes...</div>
        )}
      </ul>
    </div>
  );

}

export default Notes
