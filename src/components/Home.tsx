import React, { useEffect, useState } from "react";
import "../css/styles.scss";
import Notes from "./Notes";
import TextareaPopup from "./TextareaPopup";

function Home() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "String",
    },
    {
      id: 1,
      text: "Yo",
    },
    {
      id: 2,
      text: "Hello",
    },
    {
      id: 3,
      text: "Hi",
    },
    {
      id: 0,
      text: "String",
    },
    {
      id: 1,
      text: "Yo",
    },
    {
      id: 2,
      text: "Hello",
    },
    {
      id: 3,
      text: "Hi",
    },
    {
      id: 0,
      text: "String",
    },
    {
      id: 1,
      text: "Yo",
    },
    {
      id: 2,
      text: "Hello",
    },
    {
      id: 3,
      text: "Hi",
    },
  ]);

  const [show, setShow] = useState(false);

  const closePopup = () => {
    setShow(false);
  };

  const data = (note: any) => {
    return <Notes key={note.id} text={note.text} />;
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1 className="text-5xl font-medium text-center pb-8">Notes App</h1>
      <div className="container px-8 pt-8 rounded-xl aligning">
        <button
          onClick={() => setShow(true)}
          type="button"
          className="bg-red-900 text-white p-12 text-lg rounded-2xl onHover"
        >
          Add note
        </button>
        <div className="placing">
          {show ? (
            <TextareaPopup setClose={closePopup}>Hello</TextareaPopup>
          ) : (
            false
          )}
        </div>
        <div className="grid grid-cols-4 gap-4 pt-12">{notes.map(data)}</div>
      </div>
    </div>
  );
}

export default Home;
