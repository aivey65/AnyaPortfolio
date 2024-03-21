import React from 'react';
import Tab from './Tab';

export default function Header({ mobile, setPageFunction, activeTab }) {
    const tabs = ["HOME", "ABOUT", "PROJECT", "RESUME", "CONTACT"];

    return <div id="header">
        <nav>
            <ol>
                { tabs.map((item, i ) => {
                    return <Tab text={item} key={i} id={i} activeTab={activeTab} setPageFunction={setPageFunction} />
                })}
            </ol>
        </nav>
    </div>
}