import React, { useState } from "react";
import "../css/styles.scss";
import INotes from "../interfaces/INotes";
import { Check, PenTool, Trash } from "react-feather";

const Notes: React.FC<INotes> = ({ item, refresher }: INotes) => {
  let savedToLocalStorage = JSON.parse(localStorage.getItem("notes") || "{}");
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(item.content);

  const handleDelete = () => {
    if (savedToLocalStorage.length) {
      let newSavedData = savedToLocalStorage.filter(
        (data: any) => data.id !== item.id
      );
      localStorage.setItem("notes", JSON.stringify(newSavedData));
      refresher();
    }
  };

  const handleEdit = () => {
    let ids = savedToLocalStorage.findIndex((x: any) => x.id === item.id);
    savedToLocalStorage[ids].content = content;
    localStorage.setItem("notes", JSON.stringify(savedToLocalStorage));
    setEdit(false);
    refresher();
  };

  return (
    <div>
      <div className="bg-gray-300 text-lg rounded-2xl notes onHover p-2">
        <textarea
          className="notesarea p-2 resize-none"
          disabled={!edit}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <section>
          {!edit ? (
            <button onClick={() => setEdit(true)}>
              <PenTool />
            </button>
          ) : (
            <button onClick={handleEdit}>
              <Check />
            </button>
          )}

          <button className="float-right" onClick={handleDelete}>
            <Trash />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Notes;
