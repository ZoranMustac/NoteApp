import React, { useState } from "react";
import "../css/styles.scss";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="text-5xl font-medium text-center">Notes App</h1>
      <div className="pt-12">
        <div className="container px-8 pt-8 rounded-xl aligning">
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <button
              onClick={() => setShow(true)}
              type="button"
              className="bg-red-700 text-white p-12 text-lg rounded-2xl onHover"
            >
              Add note
            </button>
            {show ? <textarea className="textarea"></textarea> : false}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
