import "./JournalPage.scss";
import AddNotes from "../../components/AddNotes/AddNotes";
import { useState } from "react";
import axios from "axios";

function JournalPage() {
  const [notes, setNotes] = useState(null);

  const getNotes = () => {
    axios
      .get("http://localhost:2020/notes"
      )
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="journal-page">
      <AddNotes notes={notes} getNotes={getNotes} />
    </div>
  );
}

export default JournalPage