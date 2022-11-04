import React, { useState } from "react";
import ITextareaProps from "../interfaces/ITextareaProps";
import "../css/styles.scss";

const TextareaPopup: React.FC<ITextareaProps> = ({
  show,
  setShow,
  refresher,
}: ITextareaProps) => {
  const [content, setContent] = useState("");

  const handleAdd = () => {
    const savedToLocalStorage = JSON.parse(
      localStorage.getItem("notes") || "[]"
    );
    if (!content) return alert("Content is required");

    let newSave = {
      id: Date.now(),
      content,
    };

    savedToLocalStorage.push(newSave);
    localStorage.setItem("notes", JSON.stringify(savedToLocalStorage));
    setShow(false);
    refresher();
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div className="bg-slate-400 backdrop">
        <button className="float-right pr-4" onClick={handleAdd}>
          Save
        </button>
        <button className="pl-4" onClick={closeModal}>
          X
        </button>
      </div>
      <textarea
        className="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
    </>
  );
};

export default TextareaPopup;
