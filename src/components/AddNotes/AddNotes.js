import axios from "axios";
import { useState } from "react";
import "./AddNotes.scss";

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
        "http://localhost:8080/notes",
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
      <h2 className="add-note__header">Add Notes</h2>
      <form className="add-notes__form" onSubmit={handleSubmit}>
        <label for="note1" className="add-note__label">
          Note #1
          <textarea
            type="textarea"
            name="note"
            id="note1"
            value={content1}
            onChange={handleContentChange1}
          >
          </textarea>
        </label>
        <label for="note2" className="add-note__label">
          Note #2
          <textarea
            type="textarea"
            name="note"
            id="note2"
            value={content2}
            onChange={handleContentChange2}
          >
          </textarea>
        </label>
        <label for="note3" className="add-note__label">
          Note #3
          <textarea
            type="textarea"
            name="note"
            id="note3"
            value={content3}
            onChange={handleContentChange3}
          >
          </textarea>
        </label>

        <button>Add Notes</button>

        {isSuccess && "Added notes"}
        {errorMessage}
      </form>
    </div >
  )

}

export default AddNotes