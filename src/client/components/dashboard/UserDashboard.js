import React from 'react';
import CategoryForm from '../forms/CategoryForm';
import MarkForm from '../forms/MarkForm';
import SearchForm from '../forms/SearchForm';
import CategoryList from '../categories/CategoryList';
import UserMarkList from '../marks/UserMarkList';
import UserActions from '../../actions/user-actions';
import UserStore from '../../stores/user-store';
import './dashboard.less';

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isInvalidCategory: true ,
			invalidCategoryMessage: ''
		}
	}

	componentDidMount() {
		UserActions.fetchCategories(UserStore.getEmail())
	}

	addCategory(e) {
		e.preventDefault();
		UserActions.addCategory(e.nativeEvent.target[0].value, UserStore.getEmail());
		e.nativeEvent.target[0].value = '';
	}

	addMark(e) {
		e.preventDefault();
	}

	filterMarks(e) {

	}
	
	validateCategory(e) {
		let value = e.nativeEvent.target.value;
		if(value.length === 0) {
			this.setState({invalidCategoryMessage: '', isInvalidCategory: true})
		} else if(value.length < 3) {
			this.setState({invalidCategoryMessage: 'to short.', isInvalidCategory: true})
		} else if(value.length > 30) {
			this.setState({invalidCategoryMessage: 'to long.', isInvalidCategory: true})
		} else {
			this.setState({invalidCategoryMessage: '', isInvalidCategory: false})
		}
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
							<CategoryForm isDisabled={this.state.isInvalidCategory}
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

