import React from 'react';
import CategoryForm from '../forms/CategoryForm';
import CategoryList from '../categories/CategoryList';
import './dashboard.less';

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props);
	}


	addCategory(e) {
		e.preventDefault();
	}

	render() {
		return (
				<div className="dashboard">
					<section>

					</section>
					<aside>
						<h2>categories</h2>
						<CategoryForm handleSubmit={this.addCategory.bind(this)} />
						<CategoryList />
					</aside>	
				</div>
			)
	}
}

