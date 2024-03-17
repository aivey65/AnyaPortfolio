import React, { useState, useEffect } from 'react';
import { transitionOpen, transitionClose } from './index';

import Header from './components/Header';
import ProjectPage from "./components/pages/ProjectPage";
import AboutPage from "./components/pages/AboutPage"
import HomePage from './components/pages/HomePage';
import ResumePage from './components/pages/ResumePage';
import ContactPage from './components/pages/ContactPage';

function App() {
    const [mobile, setMobile] = useState(false);
    const [currentPage, setCurrentPage] = useState(false);

    function updatePage(newPage) {
        var bubble = document.getElementById("transition-bubble");

        if (bubble == null) {
            bubble = document.createElement("div");
            bubble.id = "transition-bubble";
            document.body.append(bubble);
        }

        bubble.addEventListener("transitionend", (e) => {
            console.log(e)
            setCurrentPage(newPage);
        });
        
        transitionOpen();
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 600) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    })

    var page = null
    if (currentPage == 0) { // Home
        page = <HomePage />
    } else if (currentPage == 1) { // About
        page = <AboutPage />
    } else if (currentPage == 2) { // Project
        page = <ProjectPage />
    } else if (currentPage == 3) { // Resume
        page = <ResumePage />
    } else { // Contact
        page = <ContactPage />
    }

    return <>
        <Header mobile={mobile} setPageFunction={updatePage} />
        {page}
    </>;
}

export default App;