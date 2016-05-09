import UserConstants from '../constants/user-constants';
import {dispatch, register} from '../dispatchers/dispatcher';
import UserAPI from '../api/user-api';

export default {
  logout() {
    dispatch({actionType: UserConstants.LOGOUT})
  },
  
  register(user) {
    dispatch({actionType: UserConstants.REGISTER, user})
    UserAPI.register(user).then(res => {
        if(res.status === 201) {
                dispatch({actionType: UserConstants.REGISTRATION_COMPLETE, user})
        }
    })
  },
  
  login(user) {
    dispatch({actionType: UserConstants.LOGIN, user})
    UserAPI.login(user).then(res => {
        if(res.status === 200) {
            dispatch({actionType: UserConstants.LOGIN_COMPLETE, user})
        }
    })
  },

  fetchCategories(email) {
    UserAPI.fetchCategories(email)
      .then(categories => {
        console.log(categories);
        dispatch({actionType: UserConstants.FETCH_CATEGORIES, categories})
      })
  },
  
  fetchMarks(email) {
    UserAPI.fetchMarks(email)
      .then(marks => {
        console.log(marks);
        dispatch({actionType: UserConstants.FETCH_MARKS, marks})
      })
  },
  
  addCategory(categoryName, email) {
    UserAPI.addCategory(categoryName, email)
    .then(res => {
      console.log(res);
      dispatch({actionType: UserConstants.ADD_CATEGORY, categoryName})
    })
  },
  
  removeCategory(categoryName, email) {
    UserAPI.removeCategory(categoryName, email)
    .then(res => {
      console.log(res);
      dispatch({actionType: UserConstants.REMOVE_CATEGORY, categoryName})
    })
  },
  
  addMarkToCategory(mark, categoryName, email) {
    UserAPI.addMarkToCategory(mark, categoryName, email)
    .then(res => {
      console.log(res);
      this.fetchCategories(email);
    })
  },
  
  removeMarkFromCategory(mark, categoryName, email) {
    UserAPI.removeMarkFromCategory(mark, categoryName, email)
    .then(res => {
      console.log(res);
      this.fetchCategories(email);
    })
  }
}