import React, { useState, useEffect } from "react";
import Functions from "../services/Functions";

function TextareaPopup(props: any) {
  return (
    <div>
      <div className="bg-slate-400 backdrop">
        <button className="float-right pr-4">Save</button>
        <button className="pl-4" onClick={props.setClose}>
          X
        </button>
      </div>
      <textarea className="textarea"></textarea>
    </div>
  );
}

export default TextareaPopup;
