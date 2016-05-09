import React from 'react';
import moment from 'moment';


const PublicMark = props => {
        
        return (
            <li className="public-mark-item">
                <img id="img" src={'data:image/jpeg;base64,' + props.mark.thumbnail}
                alt={`screenshot of ${props.mark.url}`} onError={(img) => console.log(img.nativeEvent.target.src = props.defaultImage)} />
                <p className="timestamp">created: {moment(props.mark.creationDate, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
                <div className="col">
                    <a href={props.mark.url}>{props.mark.url}</a>
                </div>
                <div className="col">
                    
                </div>
                <div className="col">
                    
                </div>
            </li>
        )
  
}

export default PublicMark