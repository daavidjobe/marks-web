import React from 'react';

const CategoryItem = (props) => (
	<li className="category-item">
		<a href="#" onClick={props.handleClick}>{props.category.name}</a>
	</li>
)

export default CategoryItem