import 'whatwg-fetch';

export default {

  addMark: function (url, email) {
    return fetch(`/api/marks/addMark?email=${email}`, {
      method: 'POST',
      body: url,
      headers: new Headers({
        'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
      }),
    })
      .then(res => res.json())
  },

  removeMark: function (mark) {
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

  fetchMarkMeta: function (mark) {
    return fetch(`/scraper?url=${mark.url}`)
      .then(res =>  res.json())
  },
  
  assignMetaToMark: function(mark, meta) {
    meta.mark = mark;
    return fetch('/api/marks/assignMetaToMark', {
      method: 'POST',
      body: JSON.stringify(meta),
      headers: new Headers({
        'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
      })
    })
    .then(res => res.json())
  },

  fetchPublicMarks: function () {
    return fetch('/api/marks/findPublishedMarks')
      .then(res => res.json())
  },
  
  promote: function(mark, email) {
    return fetch(`/api/marks/promote?email=${email}`, {
      method: 'PUT',
      body: JSON.stringify(mark),
      headers: new Headers({
        'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
      })
    })
    .then(res => res.json())
  },
  
  demote: function(mark, email) {
    return fetch(`/api/marks/demote?email=${email}`, {
      method: 'PUT',
      body: JSON.stringify(mark),
      headers: new Headers({
        'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
      })
    })
    .then(res => res.json())
  }
}

