import React from 'react';
import Dropdown from '../dropdown/Dropdown';


const UserMark = props => {
    
    
        let categories = props.categories.map((cat, index) => {
            return <li key={index} onClick={props.addToCategory.bind(null, cat.name, props.mark)}>{cat.name}</li>
        })
        
        return (
            <li className="mark-item">
                <a href={props.mark.url}>{props.mark.url}</a>
                <p className="timestamp">created: {props.mark.creationDate}</p>
                 <Dropdown title={props.mark.category}>
                     {categories}
                </Dropdown>
                <button onClick={props.handleRemove} className="fa fa-minus-circle btn-remove"></button>
            </li>
        )
  
}

export default UserMark