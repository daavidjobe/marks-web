import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import moment from 'moment';


const UserMark = props => {
    
    
        let categories = props.categories.map((cat, index) => {
            return <li key={index} onClick={props.addToCategory.bind(null, cat.name, props.mark)}>{cat.name}</li>
        })
        
        return (
            <li className="mark-item">
                <img id="img" src={'data:image/jpeg;base64,' + props.mark.thumbnail}
                alt={`screenshot of ${props.mark.url}`} onError={(img) => img.nativeEvent.target.src = props.defaultImage} />
                <p className="timestamp">created: {moment.utc(props.mark.creationDate).fromNow()}</p>
                <div className="col url">
                    <a target="_BLANK" href={props.mark.url}>{props.mark.url}</a>
                </div>
                <div className="col">
                    <Dropdown title={props.mark.category}>
                    <li onClick={props.removeFromCategory.bind(null, props.mark)}>none</li>
                         {categories}
                    </Dropdown>
                </div>
                <div className="col">
                    <button onClick={props.handleRemove} className="fa fa-minus-circle btn-remove"></button>
                </div>
            </li>
        )
  
}

export default UserMark