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
        if (newPage == currentPage) {
            return
        }

        var bubble = document.getElementById("transition-bubble");

        bubble.addEventListener("transitionend", (e) => {
            setCurrentPage(newPage);
            transitionClose();
        }, {once: true});
        
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
        <Header mobile={mobile} setPageFunction={updatePage} activeTab={currentPage} />
        <div id="transition-bubble" className='deactivate'></div>
        {page}
    </>;
}

export default App;