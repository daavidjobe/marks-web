import React from 'react';

const CategoryItem = (props) => (
	<li className="category-item">
		<a href="#" onClick={props.handleClick}>{props.category.name}</a>
		<button onClick={props.handleDelete} className="fa fa-minus-circle"></button>
	</li>
)

export default CategoryItem