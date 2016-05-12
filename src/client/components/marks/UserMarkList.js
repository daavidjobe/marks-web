import React from 'react';
import UserMark from './UserMark';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';
import MarkActions from '../../actions/mark-actions';
import './marks.less';


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
		if(mark.category !== 'category')
		UserActions.removeMarkFromCategory(mark, mark.category, UserStore.getEmail());
	}

  render() {
		
  	let list = this.props.filter === undefined ? this.props.marks :
		this.props.marks.filter(mark => mark.category === this.props.filter);
		
		let marks = list.map((mark, index) => {
  		return <UserMark handleRemove={this.removeMark.bind(this, mark)} key={index}
			defaultImage='http://placehold.it/133x100/7b6b99/FFFFFF'
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
