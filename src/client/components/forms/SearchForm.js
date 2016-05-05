import React from 'react';

const SearchForm = props => (
					<div className="search-container">
						<input className="search-input" type="text" placeholder="search.." onChange={props.handleSearch} />
					</div>
			)
	
export default SearchForm