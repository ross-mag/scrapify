import "./NotesPage.scss";
import AddNotes from "../../components/AddNotes/AddNotes";
import { useState } from "react";
import axios from "axios";

function NotesPage() {
  const [notes, setNotes] = useState(null);

  const getNotes = () => {
    axios
      .get("http://localhost:8080/notes"
      )
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="notes-page">
      <AddNotes notes={notes} getNotes={getNotes} />
    </div>
  );
}

export default NotesPage