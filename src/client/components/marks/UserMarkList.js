import React from 'react';
import UserMark from './UserMark';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import MarkActions from '../../actions/mark-actions';


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
	
	removeMark(mark) {
		MarkActions.removeMark(mark);
	}
	
	addToCategory(categoryName, mark) {
		console.log(categoryName);
		console.log(mark);
		UserActions.addMarkToCategory(mark, categoryName, UserStore.getEmail());
		UserStore.getMarks();
	}

  render() {
		
  	let marks = this.state.marks.map(mark => {
  		return <UserMark handleRemove={this.removeMark.bind(this, mark)} key={mark.id}
			categories={UserStore.getCategories()} addToCategory={this.addToCategory.bind(this)} mark={mark} />
  	})

    return (
      <ul className="marks">
      	{marks}
      </ul>
    );
  }
}
