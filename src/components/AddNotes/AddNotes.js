import "./AddNotes.scss";
import { useState } from "react";

function AddNotes() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      content1,
      content2,
      content3,
    };

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...existingNotes, newNote];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setIsSuccess(true);
    setErrorMessage("");
    setContent1("");
    setContent2("");
    setContent3("");
  };

  const handleContentChange1 = (event) => {
    setContent1(event.target.value);
  };

  const handleContentChange2 = (event) => {
    setContent2(event.target.value);
  };

  const handleContentChange3 = (event) => {
    setContent3(event.target.value);
  };

  return (
    <div className="add-notes">
      <div className="form__container">
        <form className="add-notes__form" onSubmit={handleSubmit}>
          <div className="form__note-button-container">
            <div className="form__button-container">
              <button className="form__button">
                <h2 className="add-notes__header">Add Notes</h2>
              </button>
              {isSuccess && "Added notes"}
              {errorMessage}
            </div>
            <div className="add-notes__notes-container">
              <div className="note">
                <label htmlFor="note1" className="note__label"></label>
                Note #1
                <textarea
                  className="note__input"
                  name="content1"
                  id="note1"
                  value={content1}
                  onChange={handleContentChange1}
                >
                </textarea>
              </div>
              <div className="note">
                <label htmlFor="note2" className="note__label"></label>
                Note #2
                <textarea
                  className="note__input"
                  name="content2"
                  id="note2"
                  value={content2}
                  onChange={handleContentChange2}
                >
                </textarea>
              </div>
              <div className="note">
                <label htmlFor="note3" className="note__label"></label>
                Note #3
                <textarea
                  className="note__input"
                  name="content3"
                  id="note3"
                  value={content3}
                  onChange={handleContentChange3}
                >
                </textarea>
              </div>
            </div>
          </div>
        </form >
      </div>
    </div>
  );
}

export default AddNotes