import React from 'react';

const CategoryForm = props => (
				<form className="category-form" onSubmit={props.handleSubmit}>
					<input type="text" onChange={props.handleChange} placeholder="category name" />
					<button type="submit" className="fa fa-plus-circle"></button>
					<span>{props.errorMessage}</span>
				</form>
			)
	

export default CategoryForm