import React, { useState } from "react";
import "../css/styles.scss";
import TextareaPopup from "./TextareaPopup";

function Notes(props: any) {
  const dataFromLocalStorage = localStorage.getItem("notes");

  return (
    <div>
      <div
        key={props.id}
        className="bg-gray-400 text-lg rounded-2xl notes onHover"
      >
        {props.text}
      </div>
    </div>
  );
}

export default Notes;
