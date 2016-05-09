import React from 'react';
import UserMark from './UserMark';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import MarkActions from '../../actions/mark-actions';


export default class UserMarkList extends React.Component {

  constructor(props) {
    super(props);
  }
	
	removeMark(mark) {
		MarkActions.removeMark(mark);
	}
	
	addToCategory(categoryName, mark) {
		UserActions.addMarkToCategory(mark, categoryName, UserStore.getEmail());
	}
	
	removeFromCategory(mark) {
		UserActions.removeMarkFromCategory(mark, mark.category, UserStore.getEmail());
	}

  render() {
		
  	let list = this.props.filter === undefined ? this.props.marks :
		this.props.marks.filter(mark => mark.category === this.props.filter);
		
		let marks = list.map(mark => {
  		return <UserMark handleRemove={this.removeMark.bind(this, mark)} key={mark.id}
			removeFromCategory={this.removeFromCategory.bind(this)} categories={UserStore.getCategories()}
			addToCategory={this.addToCategory.bind(this)} mark={mark} />
  	})
		

    return (
      <ul className="marks">
      	{marks}
      </ul>
    );
  }
}
