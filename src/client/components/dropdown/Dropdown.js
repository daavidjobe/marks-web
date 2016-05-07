import React from 'react'; 
import './dropdown.less';

const Dropdown = (props) => (
    <div className="dropdown">
    <div className="dropdown-button">{props.title}<i className="fa fa-arrow-circle-down arrow" aria-hidden="true"></i>
        <ul className="dropdown-list">
            {props.children}
        </ul>
      </div>
    </div>
)

export default Dropdown
