import React from 'react';

const CategoryForm = props => (
				<form className="category-form" onSubmit={props.handleSubmit}>
					<input type="text" placeholder="category name" min-length="3" max-length="40" />
					<button type="submit" className="fa fa-plus-circle"></button>
				</form>
			)
	

export default CategoryForm