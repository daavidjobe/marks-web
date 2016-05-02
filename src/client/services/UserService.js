

const UserService = {
    
    
    register: function(user) {
        return fetch('/api/users/add', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(res => {
           if(res.status === 201) {
               localStorage.token = Math.random().toString(36).substring(7)
           }
            return {authenticated: this.loggedIn(), token: this.getToken(), email: user.email};
        })
    },
   
    
    login: function(user) {
        return fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 200) {
                localStorage.token = Math.random().toString(36).substring(7)
            }
            return {authenticated: this.loggedIn(), token: this.getToken(), email: user.email};
        })
    },
    
    getToken: function() {
        return localStorage.token;
    },
    
    loggedIn: function() {
        return !!localStorage.token
    },
    
    logout: function() {
        delete localStorage.token
    }
}

export default UserService