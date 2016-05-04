import React from 'react';
import CategoryItem from './CategoryItem';

export default class CategoryList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{
					name: 'tech'
				},
				{
					name: 'news'
				},
				{
					name: 'blogs'
				}
			]
		}
	}

	render() {

		let categories = this.state.categories.map((category, index) => {
			return <CategoryItem category={category} key={index} />
		})


		return (
		  <ul className="category-list">
		  	{categories}
		  </ul>
		)
	}
} 
