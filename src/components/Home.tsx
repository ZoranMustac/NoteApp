import React from "react";
import '../css/styles.css';

function Home(){
    return(
        <div>
            <h1 className="text-5xl font-medium text-center">Notes App</h1>
            <div className="pt-12">
            <div className="container overflow-hidden px-8 rounded-xl aligning">
                <div className="grid grid-cols-4 gap-4 box-content justify-items-center">
                    <button type="button" className="bg-red-700 text-white p-12 text-lg rounded-2xl">Add note</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;