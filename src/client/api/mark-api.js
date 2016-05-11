import 'whatwg-fetch';

export default {
  
  addMark: function(url, email) {
      console.log(`addMark(${url}, ${email})`)
      return fetch(`/api/marks/addMark?email=${email}`, {
          method: 'POST',
          body: url,
          headers: new Headers({
            'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
          }),
      })
      .then(res => res.json())
  },
  
  removeMark: function(mark) {
      console.log(`removeMark(${mark})`)
      return fetch('/api/marks/removeMark', {
          method: 'PUT',
          body: JSON.stringify(mark),
          headers: new Headers({
           'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
          }),
      })
      .then(res => {
          console.log(res)
          return res.json()
      })
  },
  
  fetchMarkMeta: function(mark) {
      console.log(`fetchMarkMeta(${mark}`)
      return fetch('/api/marks/fetchMarkMeta', {
        method: 'POST',
        body: JSON.stringify(mark),
        headers: new Headers({
          'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
        }),
      })
      .then(res => {
        console.log(res);
        return res.json();
      })
  },
  
  fetchPublicMarks: function() {
      console.log('fetchPublicMarks()')
      return fetch('/api/marks/findPublishedMarks')
      .then(res => res.json())
  }
}

