import "./Notes.scss";
import { useEffect } from "react";

function Notes({ notes, getNotes }) {
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <ul className="notes__list">
        {!notes && "Loading notes..."}
        {notes &&
          notes.map((note) => (
            <div className="notes__container">
              <li className="notes__list-item">
                {note.content1}
              </li>
              <li className="notes__list-item">
                {note.content2}
              </li>
              <li className="notes__list-item">
                {note.content3}
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default Notes