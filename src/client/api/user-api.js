

export default {
  register: function(user) {
      console.log(`register() -> ${user.email}`)
      return fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify(user)
      })
      .then(res => {return {data: res.json(), status: res.status}})
  },

  login: function(user) {
      console.log(`login() -> ${user.email}`)
      return fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify(user)
      })
      .then(res => {return {data: res.json(), status: res.status}})
  }
}
