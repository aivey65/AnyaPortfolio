import React from 'react';

export default function Tab({ id, text, activeTab,  setPageFunction}) {
    return <li className={ activeTab == id ? "nav_li active" : "nav_li" } onClick={ () => setPageFunction(id) }>{text}</li>
}