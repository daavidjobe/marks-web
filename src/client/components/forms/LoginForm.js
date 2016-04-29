import React from 'react';
import './forms.less';
import {validateEmail, validatePassword} from '../../helpers/validation';

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.refs.email.focus(); 
    }
    
    _validateEmail(email) {
        if(validateEmail(email)) {
            console.log('valid email');
        } else {
            console.log('invalid email');
        }
    }
    
    _validatePassword(password) {
        if(validatePassword(password)) {
            console.log('valid password');
        } else {
            console.log('Minimum 8 characters at least 1 Alphabet and 1 Number');
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        this._validateEmail(this.refs.email.value);
        this._validatePassword(this.refs.password.value);
    }
    
    render() {
        return (
            <form className="form-login" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="email">email:</label>
                <input type="text" ref="email" name="email" />
                <label htmlFor="password">password:</label>
                <input type="password" ref="password" name="password" />
                <input type="submit" value="log in"/>
            </form>
        )
    }
}

export default LoginForm