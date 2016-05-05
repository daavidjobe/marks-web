import React from 'react';
import CategoryForm from '../forms/CategoryForm';
import MarkForm from '../forms/MarkForm';
import SearchForm from '../forms/SearchForm';
import CategoryList from '../categories/CategoryList';
import UserMarkList from '../marks/UserMarkList';
import './dashboard.less';

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props);
	}


	addCategory(e) {
		e.preventDefault();
	}

	addMark(e) {
		e.preventDefault();
	}

	filterMarks(e) {

	}

	render() {
		return (
				<div className="dashboard">
					<section>
						<div className="controls">
							<div className="control-item">
								<MarkForm handleSubmit={this.addMark.bind(this)}/>
							</div>
							<div className="control-item">
								<SearchForm handleSearch={this.filterMarks.bind(this)} />
							</div>
						</div>
						<UserMarkList />
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

