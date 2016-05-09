import React from 'react';
import CategoryItem from './CategoryItem';
import UserStore from '../../stores/user-store';
import UserActions from '../../actions/user-actions';

export default class CategoryList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
    	UserActions.fetchCategories(UserStore.getEmail())
    	UserStore.addChangeListener(this._onChange.bind(this));
  	}
  
  	componentWillUnmount() {
    	UserStore.removeChangeListener(this._onChange.bind(this));
  	}
  
  	_onChange() {
    	this.setState({categories: UserStore.getCategories()});
  	}
	  
	
	handleDelete(categoryName) {
		UserActions.removeCategory(categoryName, UserStore.getEmail());
	}
	

	render() {

		let categories = this.state.categories.map((category, index) => {
			return <CategoryItem handleClick={this.props.filter.bind(null, category.name)}
			handleDelete={this.handleDelete.bind(this, category.name)} category={category} key={index} />
		})


		return (
		  <ul className="category-list">
		  	<CategoryItem handleClick={this.props.filter.bind(null, undefined)}
			category={{name: 'all'}} />
		  	{categories}
		  </ul>
		)
	}
} 
