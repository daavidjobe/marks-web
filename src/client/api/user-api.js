import 'whatwg-fetch';

export default {

  signin: function(user) {
      console.log(`signin(${user.email})`)
      return fetch('/api/users/signin', {
          method: 'POST',
          headers: new Headers({
            'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
          }),
          body: JSON.stringify(user)
      })
      .then(res => res.json())
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
          headers: new Headers({
            'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
          }),
          body: JSON.stringify(mark)
      })
      .then(res => res.json())
  },
  
  removeMarkFromCategory(mark, categoryName, email) {
      console.log(`removeMarkFromCategory(${mark}, ${categoryName}, ${email})`)
      return fetch(`/api/users/removeMarkFromCategory/${categoryName}?email=${email}`, {
          method: 'PUT',
          headers: new Headers({
            'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
          }),
          body: JSON.stringify(mark)
      })
      .then(res => res.json())
  }
}
