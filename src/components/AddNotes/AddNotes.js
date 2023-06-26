import "./AddNotes.scss";
import axios from "axios";
import { useState } from "react";

function AddNotes({ notes, getNotes }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:2020/notes",
        {
          content1: event.target.content1.value,
          content2: event.target.content2.value,
          content3: event.target.content3.value,
        }
      )
      .then(() => {
        setIsSuccess(true);
        setErrorMessage("");
        getNotes();
        setContent1("");
        setContent2("");
        setContent3("");
      })

      .catch((error) => {
        setErrorMessage(error.response.data);
      });
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
      <h2 className="add-notes__header">Add Notes</h2>
      <form className="add-notes__form" onSubmit={handleSubmit}>
        <div className="form__container">
          <div className="form__note">
            <label htmlFor="note1" className="form__label">
              Note #1
              <input
                type="textarea"
                name="content1"
                id="note1"
                value={content1}
                onChange={handleContentChange1}
              >
              </input>
            </label>
          </div>
          <div className="form__note">
            <label htmlFor="note2" className="form__label">
              Note #2
              <input
                type="textarea"
                name="content2"
                id="note2"
                value={content2}
                onChange={handleContentChange2}
              >
              </input>
            </label>
          </div>
          <div className="form__note">
            <label htmlFor="note3" className="form__label">
              Note #3
              <input
                type="textarea"
                name="content3"
                id="note3"
                value={content3}
                onChange={handleContentChange3}
              >
              </input>
            </label>
          </div>
        </div>

        <button className="form__button">Add Notes</button>

        {isSuccess && "Added notes"}
        {errorMessage}
      </form>
    </div >
  );
}

export default AddNotes