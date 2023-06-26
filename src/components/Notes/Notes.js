import "./Notes.scss";
import { useEffect } from "react";

function Notes({ notes, getNotes }) {
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <ul className="notes__list">
        {notes ? (
          <div className="notes__container" key={notes.id}>
            <li className="notes__list-item">
              {notes.content1}
            </li>
            <li className="notes__list-item">
              {notes.content2}
            </li>
            <li className="notes__list-item">
              {notes.content3}
            </li>
          </div>
        ) : (
          "Loading notes..."
        )}
      </ul>
    </div>
  );
}

export default Notes