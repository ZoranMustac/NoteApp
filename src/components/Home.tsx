import React, { useEffect, useState } from "react";
import "../css/styles.scss";
import Notes from "./Notes";
import TextareaPopup from "./TextareaPopup";

const Home = () => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes") || "[]"));
  }, []);

  const refresher = () => {
    setNotes(JSON.parse(localStorage.getItem("notes") || "[]"));
  };

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
          {show && (
            <TextareaPopup show={show} setShow={setShow} refresher={refresher}>
              Hello
            </TextareaPopup>
          )}
        </div>

        <div className="grid grid-cols-4 gap-4 pt-12">
          {notes.map((item: any) => (
            <Notes key={item.id} item={item} refresher={refresher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
