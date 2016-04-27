import React from 'react';
import './sidebar.less';
export default () => {
    return (
        <aside className="sidebar">
        <ul>
            <li>
                <button className="button">
            <p><i className="fa fa-info"></i>about</p>
            <div className="underline"></div>
            </button>
            </li>
            <li>
                <button className="button">
                     <p><i className="fa fa-question"></i>FAQ</p>
            <div className="underline"></div>
            </button>
            </li>
        </ul>
        </aside>   
    )
}