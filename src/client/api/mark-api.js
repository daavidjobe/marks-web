import 'whatwg-fetch';
import UserStore from '../stores/user-store';

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

  fetchThumbnail: function (mark) {
    return fetch(`/scraper/thumbnail?url=${mark.url}`)
      .then(res =>  res.json())
  },
  
  assignThumbnailToMark: function(mark, meta) {
    meta.mark = mark;
    return fetch('/api/marks/assignThumbnailToMark', {
      method: 'POST',
      body: JSON.stringify(meta),
      headers: new Headers({
        'Authorization': 'Basic bWFya3Mtd2ViOm1hcmtlcg=='
      })
    })
    .then(res => res.json())
  },

  fetchPublicMarks: function () {
    return fetch(`/api/marks/findPublishedMarks?email=${UserStore.getEmail()}`)
      .then(res => res.json())
  },
  
  fetchMostPopularMarks: function () {
    return fetch(`/api/marks/findMostPopularMarks?email=${UserStore.getEmail()}`)
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

