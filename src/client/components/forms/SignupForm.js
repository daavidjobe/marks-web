import React from 'react';
import './forms.less';

class SignupForm extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.refs.email.focus(); 
    }
    
    _validateEmail(email) {
    
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    
    render() {
        return (
            <form className="form-signup" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="email">email:</label>
                <input type="text" ref="email" name="email" />
                <label htmlFor="password">password:</label>
                <input type="password" ref="password" name="password" />
                <input type="submit" value="sign up"/>
            </form>
        )
    }
}

export default SignupForm