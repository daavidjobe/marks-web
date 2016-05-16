import React from 'react';
import moment from 'moment';

const PublicMark = props => {
        
        return (
            <li className="public-mark-item">
                <img id="img" src={'data:image/jpeg;base64,' + props.mark.thumbnail} width="90"
                alt={`screenshot of ${props.mark.url}`} onError={(img) => img.nativeEvent.target.src = props.defaultImage} />
                <div className="mark-footer">
                    <span className={props.mark.hasInteracted ? 'btn-promote btn-promote-active' : 'btn-promote'} onClick={props.handlePromote}>{props.mark.promotions}
                    <i className="fa fa-thumbs-up" aria-hidden="true"></i></span>
                    <span className={props.mark.hasInteracted ? 'btn-demote btn-demote-active' : 'btn-demote'} onClick={props.handleDemote}>{props.mark.demotions}
                    <i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                    <span>created: {moment(props.mark.creationDate, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</span>
                </div>
                <div className="col url">
                    <a target="_BLANK" href={props.mark.url}>
                      {props.mark.url.length > 30 ? props.mark.url.substring(0, 30) + '...' : props.mark.url}
                    </a>
                </div>
             
                <div className="col">
                    
                </div>
            </li>
        )
  
}

export default PublicMark