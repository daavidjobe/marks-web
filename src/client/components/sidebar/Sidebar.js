import React from 'react';
import {Link} from 'react-router';

import './sidebar.less';
export default () => {
    return (
        <aside className="sidebar">
        <ul>
            <li>
                <button className="button">
            <Link to="about"><i className="fa fa-info"></i>about</Link>
            <div className="underline"></div>
            </button>
            </li>
            <li>
                <button className="button">
                     <Link to="faq"><i className="fa fa-question"></i>FAQ</Link>
            <div className="underline"></div>
            </button>
            </li>
        </ul>
        </aside>   
    )
}