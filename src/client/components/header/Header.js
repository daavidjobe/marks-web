import React from 'react';
import './header.less';
export default (props) => {
    return (
        <ul className="header">
        <li>
          <img src="/src/client/assets/images/marks-logo.png" width="160" alt="marks logo"/>
          </li>
          <li>
           <button className="button">
            <p>log in</p>
            <div className="underline"></div>
            </button>
          </li>
          <li>
           <button className="button">
            <p>sign up</p>
            <div className="underline"></div>
            </button>
          </li>
        </ul>
    )
}