import React from 'react';

const MarkForm = props => (
				<form className="mark-form" onSubmit={props.handleSubmit}>
					<input type="text" onChange={props.handleChange} placeholder="url" min-length="3" max-length="200" />
					<button type="submit" className="fa fa-plus-circle"></button>
					<p>{props.errorMessage}</p>
				</form>
			)
	

export default MarkForm