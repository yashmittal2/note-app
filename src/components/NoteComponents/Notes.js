import { React, useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [...prevState, { id: uuid(), text: inputText }]);
    setInputText("");
  };

  const deleNote =(id) =>{
    const filteredNOtes = notes.filter((note)=> note.id!==id)
    setNotes(filteredNOtes);
  };
   
  

  return (
    <div className="notes">
     
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}
export default Notes;
