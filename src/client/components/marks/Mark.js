import React from 'react';

class Mark extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li className="mark-item">
                <a href={this.props.mark.url}>{this.props.mark.url}</a>
                <div className="social">
                <a className="fa fa-thumbs-up" aria-hidden="true"></a>
                <a className="fa fa-facebook" aria-hidden="true"></a>
                <a className="fa fa-linkedin" aria-hidden="true"></a>
                <a className="fa fa-twitter" aria-hidden="true"></a>
                </div>
                <p className="timestamp">created: {this.props.mark.created}</p>
            </li>
        )
    }
}

export default Mark