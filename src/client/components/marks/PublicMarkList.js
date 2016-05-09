import React from 'react';
import MarkActions from '../../actions/mark-actions';
import MarkStore from '../../stores/mark-store';
import PublicMark from './PublicMark';

export default class PublicMarkList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      publicMarks: []
    }
  }
  
  componentDidMount() {
  	MarkStore.addChangeListener(this._onChange.bind(this));
		MarkActions.fetchPublicMarks();
  }
  
  componentWillUnmount() {
  	MarkStore.removeChangeListener(this._onChange.bind(this));
  }
  
  _onChange() {
  	this.setState({publicMarks: MarkStore.getPublicMarks()});
  }
  
  render() {
    
    let marks = this.state.publicMarks.map((mark, index) => {
      return <PublicMark mark={mark} key={index} />
    });
    
    return (
      <ul className="public-marks">
        {marks}
      </ul>
    )
  }
}
