import React from 'react';
import {validateEmail, validatePassword} from '../../helpers/validation';
import api from '../../api/users';
import './forms.less';

class UserForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            formDisabled: true,
            emailMessage: '',
            passwordMessage: '',
        }
    }
    
    componentDidMount() {
        this.refs.email.focus(); 
    }
    
     validateEmail() {
        if(validateEmail(this.refs.email.value)) {
            console.log('valid email');
            this.setState({emailMessage: ''})
            return true;
        } else {
            this.setState({emailMessage: 'invalid email'})
            return false;
        }
    }
    
    validatePassword() {
        if(validatePassword(this.refs.password.value)) {
            console.log('valid password');
            this.setState({passwordMessage: ''})
            return true;
        } else {
            this.setState({passwordMessage: 'Minimum 8 characters at least 1 Alphabet and 1 Number'})
            return false;
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        switch (this.props.action) {
            case 'sign up':
                api.register({
                    email: this.refs.email.value,
                    password: this.refs.password.value
                }).then(res => {
                    console.log(res);
                    this.refs.email.value = '';
                    this.refs.password.value = '';
                })
                break;
             case 'sign in':
                api.login({
                      email: this.refs.email.value,
                    password: this.refs.password.value
                }).then(res => {
                    console.log(res);
                    this.refs.email.value = '';
                    this.refs.password.value = '';
                })
                break;
        }
    }
    
    handleChange(e) {
        if(this.validateEmail() && this.validatePassword()) {
            this.setState({formDisabled: false});
        } else {
            this.setState({formDisabled: true});
        }
    }
    
    render() {
        return (
            <form className="user-form"
            onChange={this.handleChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="email">email:</label>
                <input type="text" ref="email" name="email" onChange={this.handleChange.bind(this)}
                onBlur={this.validateEmail.bind(this)} />
                <p>{this.state.emailMessage}</p>
                </div>
                <div className="form-group">
                <label htmlFor="password">password:</label>
                <input type="password" ref="password" name="password" onChange={this.handleChange.bind(this)}
                onBlur={this.validatePassword.bind(this)} />
                <p>{this.state.passwordMessage}</p>
                </div>
                <div className="form-group">
                <input type="submit" value={this.props.action} disabled={this.state.formDisabled}/>
                </div>
            </form>
        )
    }
}

export default UserForm