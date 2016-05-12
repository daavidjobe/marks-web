import React from 'react';


const TabButton = props => <a href="#" onClick={props.handleClick}
    className={props.active ? 'btn-secondary-active' : ''}>
      <i className={props.symbol} aria-hidden="true"></i>
      {props.txt}
    </a>


export default TabButton

