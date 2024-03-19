import React from 'react';
import Tab from './Tab';

export default function Header({ mobile, setPageFunction, activeTab }) {
    return <div id="header">
        <nav>
            <ol>
                {<Tab/>}
                <li className={activeTab == 0 ? "nav_li active" : "nav_li"} onClick={ () => setPageFunction(0) }>HOME</li>
                <li className={activeTab == 1 ? "nav_li active" : "nav_li"} onClick={ () => setPageFunction(1) }>ABOUT</li>
                <li className={activeTab == 2 ? "nav_li active" : "nav_li"} onClick={ () => setPageFunction(2) }>PROJECT</li>
                <li className={activeTab == 3 ? "nav_li active" : "nav_li"} onClick={ () => setPageFunction(3) }>RESUME</li>
                <li className={activeTab == 4 ? "nav_li active" : "nav_li"} onClick={ () => setPageFunction(4) }>CONTACT</li>
            </ol>
        </nav>
    </div>
}