import React from 'react';

class Mark extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <li className="mark-item">
                <a href={this.props.mark.url}>{this.props.mark.url}</a>
                <p className="timestamp">created: {this.props.mark.created}</p>
            </li>
        )
    }
}

export default Mark