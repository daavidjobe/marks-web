import 'whatwg-fetch';

export default {
  register: function(user) {
      console.log(`register(${user.email})`)
      return fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify(user)
      })
      .then(res => {return {data: res.json(), status: res.status}})
  },

  login: function(user) {
      console.log(`login(${user.email})`)
      return fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify(user)
      })
      .then(res => {return {data: res.json(), status: res.status}})
  },

  fetchCategories: function(email) {
      console.log(`fetchCategories(${email})`);
      return fetch(`/api/users/findAllCategoriesForUser?email=${email}`)
        .then(res => res.json())
  },
  
  fetchMarks: function(email) {
      console.log(`fetchMarks(${email})`)
      return fetch(`/api/users/findAllMarksForUser?email=${email}`)
        .then(res => res.json())
  },
  
  addCategory(categoryName, email) {
      console.log(`addCategory(${categoryName}, ${email})`)
      return fetch(`/api/users/addCategory/${categoryName}?email=${email}`, {method: 'POST'})
        then(res => res.json())
  },
  
  removeCategory(categoryName, email) {
      console.log(`removeCategory(${categoryName}, ${email})`)
      return fetch(`/api/users/removeCategory/${categoryName}?email=${email}`, {method: 'POST'})
        then(res => res.json())
  },
  
  addMarkToCategory(mark, categoryName, email) {
      console.log(`addMarkToCategory(${mark}, ${categoryName}, ${email}`)
      return fetch(`/api/users/addMarkToCategory/${categoryName}?email=${email}`, {
          method: 'PUT',
          body: JSON.stringify(mark)
      })
      .then(res => res.json())
  }
}
