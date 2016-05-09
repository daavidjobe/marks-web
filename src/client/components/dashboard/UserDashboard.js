import React from 'react';
import Search from 'react-search'
import CategoryForm from '../forms/CategoryForm';
import MarkForm from '../forms/MarkForm';
import CategoryList from '../categories/CategoryList';
import UserMarkList from '../marks/UserMarkList';
import UserActions from '../../actions/user-actions';
import MarkActions from '../../actions/mark-actions';
import UserStore from '../../stores/user-store';
import {validateCategory, validateUrl} from '../../helpers/validation';
import {formatUrl} from '../../helpers/utils';
import './dashboard.less';


let KEYS = ['url']

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isValidCategory: true,
			invalidCategoryMessage: '',
			markErrorMessage: '',
			marks: [],
			filter: undefined,
			activeCategory: false,
		}
	}
	
	componentDidMount() {
    	UserStore.addChangeListener(this._onChange.bind(this));
		UserActions.fetchMarks(UserStore.getEmail())
  	}
  
  	componentWillUnmount() {
    	UserStore.removeChangeListener(this._onChange.bind(this));
  	}
  
  	_onChange() {
    	this.setState({marks: UserStore.getMarks()});
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
		let url = e.nativeEvent.target[0].value;
		
		if(url.length > 4 && validateUrl(url)) {
			url = formatUrl(url);
			console.log('the url: ' + url);
			let exists = UserStore.getMarks().filter(c => c.url === url).length > 0;
			if(exists) {
				this.setState({markErrorMessage: 'already added.'})
			} else {
				MarkActions.addMark(url, UserStore.getEmail());
			}
			e.nativeEvent.target[0].value = ''; 
		}
	}

	filterMarks(categoryName) {
		this.setState({filter: categoryName, activeCategory: !this.state.activeCategory});
	}
	
	validateCategory(e) {
		let categoryName = e.nativeEvent.target.value;
		let verdict = validateCategory(categoryName);
		this.setState({isValidCategory: verdict.valid, invalidCategoryMessage: verdict.message})
	}
	
	validateUrl(e) {
		let url = e.nativeEvent.target.value;
		if(url.length === 0) {
			this.setState({markErrorMessage: ''})
		} else if(!validateUrl(url)) {
			this.setState({markErrorMessage: 'invalid url'})
		} else {
			this.setState({markErrorMessage: ''})
		}
	}

	render() {
		return (
				<div className="dashboard">
					<div className="controls">
						<div className="control-item">
							<h1>dashboard</h1>		
							</div>
							<div className="control-item">
								<MarkForm errorMessage={this.state.markErrorMessage}
								handleChange={this.validateUrl.bind(this)}
								handleSubmit={this.addMark.bind(this)}/>
							</div>
						</div>
						
					<div className="dashboard-content">
						<section>
							<UserMarkList filter={this.state.filter} marks={this.state.marks} />
						</section>
						<aside>
							<h2>categories</h2>
							<CategoryForm 
							errorMessage={this.state.invalidCategoryMessage}
							handleChange={this.validateCategory.bind(this)}
							handleSubmit={this.addCategory.bind(this)} />
							<CategoryList active={this.state.activeCategory} filter={this.filterMarks.bind(this)} />
						</aside>	
					</div>
				</div>
			)
	}
}

