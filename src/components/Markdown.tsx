import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function Markdown() {
  const [input, setInput] = useState("");
  return (
    <div>
      <textarea
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/*<ReactMarkdown source={input} className="markdown" />*/}
    </div>
  );
}

export default Markdown;
