import React from 'react';
import Mark from './Mark';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';


export default class UserMarkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	marks: []
    }
  }
	
	 componentDidMount() {
    UserStore.addChangeListener(this._onChange.bind(this));
		UserActions.fetchMarks(UserStore.getEmail())
  }
  
  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange.bind(this));
  }
  
  _onChange() {
    this.setState({marks: UserStore.getMarks()});
  }

  render() {
  	let marks = this.state.marks.map((mark, index) => {
  		return <Mark key={index} mark={mark} />
  	})

    return (
      <ul>
      	{marks}
      </ul>
    );
  }
}
