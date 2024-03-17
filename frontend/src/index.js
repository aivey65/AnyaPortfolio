import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.js";

const entrypoint = document.getElementById("root");
ReactDOM.createRoot(entrypoint).render(<App/>)

export function transitionOpen() {
    var bubble = document.getElementById("transition-bubble");

    // if (bubble == null) {
    //     bubble = document.createElement("div");
    //     bubble.id = "transition-bubble";
    //     document.body.append(bubble);
    // }
    console.log("opening")

    bubble.classList.add("activate");
    bubble.classList.remove("deactivate");
}

export function transitionClose() {
    var bubble = document.getElementById("transition-bubble");
    console.log("closing")

    bubble.classList.remove("activate");
    bubble.classList.add("deactivate");
}