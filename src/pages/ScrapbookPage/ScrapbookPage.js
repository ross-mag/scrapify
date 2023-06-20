import "./ScrapbookPage.scss";
import { useState } from "react";
import axios from "axios";
import Notes from "../../components/Notes/Notes";

function ScrapbookPage() {
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
    <div className="scrapbook-page">
      <Notes notes={notes} getNotes={getNotes} />
    </div>
  );
}

export default ScrapbookPage