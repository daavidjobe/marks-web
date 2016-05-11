import UserConstants from '../constants/user-constants';
import {dispatch, register} from '../dispatchers/dispatcher';
import UserAPI from '../api/user-api';

export default {
  logout() {
    dispatch({ actionType: UserConstants.LOGOUT })
  },

  signin(user) {
    dispatch({ actionType: UserConstants.LOGIN, user })
    UserAPI.signin(user).then(res => {
      dispatch({ actionType: UserConstants.LOGIN_COMPLETE, user: res })
    }).catch(err => console.log(err));
  },

  fetchCategories(email) {
    UserAPI.fetchCategories(email)
      .then(categories => {
        console.log(categories);
        dispatch({ actionType: UserConstants.FETCH_CATEGORIES, categories })
      }).catch(err => console.log(err));
  },

  fetchMarks(email) {
    UserAPI.fetchMarks(email)
      .then(marks => {
        console.log(marks);
        dispatch({ actionType: UserConstants.FETCH_MARKS, marks })
      }).catch(err => console.log(err));
  },

  addCategory(categoryName, email) {
    UserAPI.addCategory(categoryName, email)
      .then(res => {
        console.log(res);
        dispatch({ actionType: UserConstants.ADD_CATEGORY, categoryName })
      }).catch(err => console.log(err));
  },

  removeCategory(categoryName, email) {
    UserAPI.removeCategory(categoryName, email)
      .then(res => {
        console.log(res);
        dispatch({ actionType: UserConstants.REMOVE_CATEGORY, categoryName })
      }).catch(err => console.log(err));
  },

  addMarkToCategory(mark, categoryName, email) {
    UserAPI.addMarkToCategory(mark, categoryName, email)
      .then(res => {
        console.log(res);
        this.fetchCategories(email);
      }).catch(err => console.log(err));
  },

  removeMarkFromCategory(mark, categoryName, email) {
    UserAPI.removeMarkFromCategory(mark, categoryName, email)
      .then(res => {
        console.log(res);
        this.fetchCategories(email);
      }).catch(err => console.log(err));
  }
}