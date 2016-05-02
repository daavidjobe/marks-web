

export default {
    register: function(user) {
        return fetch('/api/users/add', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(res => res.json())
    },
    
    login: function(user) {
        return fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(res => res.json())
    }
}