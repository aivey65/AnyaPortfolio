import React from 'react';

export default function Header({ mobile, setPageFunction }) {
    return <div id="header">
        <nav>
            <ol>
                <li className="nav_li" onClick={ () => setPageFunction(0) }>HOME</li>
                <li className="nav_li" onClick={ () => setPageFunction(1) }>ABOUT</li>
                <li className="nav_li" onClick={ () => setPageFunction(2) }>PROJECT</li>
                <li className="nav_li" onClick={ () => setPageFunction(3) }>RESUME</li>
                <li className="nav_li" onClick={ () => setPageFunction(4) }>CONTACT</li>
            </ol>
        </nav>
    </div>
}