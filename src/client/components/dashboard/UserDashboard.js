import React from 'react';
import CategoryForm from '../forms/CategoryForm';
import MarkForm from '../forms/MarkForm';
import SearchForm from '../forms/SearchForm';
import CategoryList from '../categories/CategoryList';
import UserMarkList from '../marks/UserMarkList';
import UserActions from '../../actions/user-actions';
import UserStore from '../../stores/user-store';
import {validateCategory} from '../../helpers/validation';
import './dashboard.less';

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isValidCategory: true,
			invalidCategoryMessage: ''
		}
	}

	componentDidMount() {
		UserActions.fetchCategories(UserStore.getEmail())
	}

	addCategory(e) {
		e.preventDefault();
		let categoryName = e.nativeEvent.target[0].value;
		let verdict = validateCategory(categoryName);
		let exists = UserStore.getCategories().filter(c => c.name === categoryName).length > 0;
		if(exists === true) {
			this.setState({invalidCategoryMessage: 'exists.'});
		}
		if(verdict.valid === true && !exists) {
			UserActions.addCategory(categoryName, UserStore.getEmail());
			e.nativeEvent.target[0].value = '';
		}
	}

	addMark(e) {
		e.preventDefault();
	}

	filterMarks(e) {

	}
	
	validateCategory(e) {
		let categoryName = e.nativeEvent.target.value;
		let verdict = validateCategory(categoryName);
		this.setState({isValidCategory: verdict.valid, invalidCategoryMessage: verdict.message})
	}

	render() {
		return (
				<div className="dashboard">
					<div className="controls">
							<div className="control-item">
								<MarkForm handleSubmit={this.addMark.bind(this)}/>
							</div>
							<div className="control-item">
								<SearchForm handleSearch={this.filterMarks.bind(this)} />
							</div>
						</div>
					<div className="dashboard-content">
						<section>
							<UserMarkList />
						</section>
						<aside>
							<h2>categories</h2>
							<CategoryForm 
							errorMessage={this.state.invalidCategoryMessage}
							handleChange={this.validateCategory.bind(this)}
							handleSubmit={this.addCategory.bind(this)} />
							<CategoryList />
						</aside>	
					</div>
				</div>
			)
	}
}

