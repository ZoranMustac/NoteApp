import React, { useState, useEffect } from "react";

const Functions = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveInfo = () => {};
};

export default Functions;
