import 'whatwg-fetch';

export default {
  
  addMark: function(url, email) {
      console.log(`addMark(${url}, ${email})`)
      return fetch(`/api/marks/addMark?email=${email}`, {
          method: 'POST',
          body: url
      })
      .then(res => res.json())
  },
  
  removeMark: function(mark) {
      console.log(`removeMark(${mark})`)
      return fetch('/api/marks/removeMark', {
          method: 'PUT',
          body: JSON.stringify(mark)
      })
      .then(res => {
          console.log(res)
          return res.json()
      })
  },
}
