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
            
            <div className="notes__item-container">
              <p className="notes__item">
                {notes.content1}
              </p>
            </div>

            <div className="notes__item-container">
              <p className="notes__item">
                {notes.content2}
              </p>
            </div>

            <div className="notes__item-container">
              <p className="notes__item">
                {notes.content3}
              </p>
            </div>

          </div>
        ) : (
          "Loading notes..."
        )}
      </ul>
    </div>
  );
}

export default Notes