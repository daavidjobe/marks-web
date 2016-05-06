import {dispatch, register} from '../dispatchers/dispatcher';
import UserConstants from '../constants/user-constants';
import {EventEmitter} from 'events';
import UserAPI from '../api/user-api';


const CHANGE_EVENT = 'change';

class UserStore extends EventEmitter {
    
    constructor() {
        super();
        this.categories = [];
        this.marks = [];
        this.user = {
            authenticated: this.isLoggedIn(),
            token: this._getToken()
        }
    }
    
    emitChange() {
        this.emit(CHANGE_EVENT)
    }
    
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
    
    getUser() {
        return this.user;
    }
    
    getEmail() {
        return localStorage.getItem('user');
    }
    
    updateUser(usr) {
        this._setToken();
        localStorage.setItem('user', usr.email);
        this.user = {
            authenticated: this.isLoggedIn(),
            token: this._getToken()
        }
        console.log(this.user);
    }
    
    isLoggedIn() {
        return !!localStorage.token;
    }
    
    _getToken() {
        return localStorage.token;
    }
    
    _setToken() {
        localStorage.token = Math.random().toString(36).substring(7);
    }
    
    logout() {
        delete localStorage.token;
        localStorage.removeItem('user');
        this.user = {
            authenticated: false,
            token: undefined
        };
    }

    setCategories(categories) {
        this.categories = categories;
    }

    getCategories() {
        return this.categories;
    }
    
    addCategory(categoryName) {
        let categories = [...this.categories, {name: categoryName}];
        this.categories = categories;
    }
    
    removeCategory(categoryName) {
        let updated = this.categories.filter(c => c.name !== categoryName);
        this.categories = updated;
    }
    
    setMarks(marks) {
        this.marks = marks;
    }
    
    getMarks() {
        return this.marks;
    }
    
}
    
    
let userStore = new UserStore();
userStore.dispatchToken = register((action) => {
    switch (action.actionType) {
            case UserConstants.REGISTRATION_COMPLETE:
                userStore.updateUser(action.user)
                break;
            case UserConstants.LOGIN_COMPLETE:
                userStore.updateUser(action.user)
                break;
            case UserConstants.LOGOUT:
                userStore.logout()
                break;
            case UserConstants.FETCH_CATEGORIES:
                userStore.setCategories(action.categories)
                break;
            case UserConstants.ADD_CATEGORY:
                userStore.addCategory(action.categoryName)
                break;
            case UserConstants.REMOVE_CATEGORY:
                userStore.removeCategory(action.categoryName)
                break;
            case UserConstants.FETCH_MARKS:
                userStore.setMarks(action.marks)
                break;
        }
        userStore.emitChange();
})
   
    
 

export default userStore;