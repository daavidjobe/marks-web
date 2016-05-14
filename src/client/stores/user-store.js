import {dispatch, register} from '../dispatchers/dispatcher';
import MarkSocket from '../sockets/MarkSocket';
import UserConstants from '../constants/user-constants';
import MarkConstants from '../constants/mark-constants';
import {EventEmitter} from 'events';
import UserAPI from '../api/user-api';

/*
  A model store responsible for keeping track of Users and user related Mark operations
*/


const CHANGE_EVENT = 'change';

class UserStore extends EventEmitter {
    
    constructor() {
        super();
        this.categories = [];
        this.marks = [];
        this.user = {authenticated: this.isLoggedIn(), token: this.getToken()}
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
    
    setUser(user) {
        this.user = user;
        localStorage.setItem('user', user.email);
    }
    
    isLoggedIn() {
        return !!localStorage.token;
    }
    
    getToken() {
        return localStorage.token;
    }
    
    setToken(token) {
        localStorage.token = token
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
    
    assignMarksToCategories() {
       let assignedList = this.marks.map(mark => {
         let cat = this.categories.filter(c => c.urls.indexOf(mark.url) !== -1)[0];
         console.log(cat);
         if(cat === undefined) {
           mark.category = 'category';
         } else {
           mark.category = cat.name;
         }
         return mark;
       })
      this.marks = assignedList;
    }
    
    setMarks(marks) {
        this.marks = marks;
    }
    
    getMarks() {
        return this.marks;
    }
    
    
    addMark(mark) {
        mark.category = 'category';
        let marks = [...this.marks, mark];
        this.marks = marks;
    }
    
    removeMark(mark) {
        this.marks = this.marks.filter(m => m.url !== mark.url);;
    }
    
    assignThumbnailToMark(meta, mark) {
        let marks = this.marks.filter(m => m.url !== mark.url);
        mark.thumbnail = meta.thumbnail;
        this.marks = [...marks, mark];
        MarkSocket.sendMessage(mark);
    }
    
}
    
    
let userStore = new UserStore();
userStore.dispatchToken = register((action) => {
    switch (action.actionType) {
            case UserConstants.LOGIN_COMPLETE:
                userStore.setUser(action.user)
                break;
            case UserConstants.LOGOUT:
                userStore.logout()
                break;
            case UserConstants.FETCH_CATEGORIES:
                userStore.setCategories(action.categories)
                userStore.assignMarksToCategories()
                break;
            case UserConstants.ADD_CATEGORY:
                userStore.addCategory(action.categoryName)
                break;
            case UserConstants.REMOVE_CATEGORY:
                userStore.removeCategory(action.categoryName)
                break;
            case UserConstants.FETCH_MARKS:
                userStore.setMarks(action.marks)
                userStore.assignMarksToCategories()
                break;
            case MarkConstants.ADD_MARK:
                userStore.addMark(action.data)
                break;
            case MarkConstants.REMOVE_MARK:
                userStore.removeMark(action.data)
                break;
            case MarkConstants.FETCH_MARK_THUMBNAIL:
                userStore.assignThumbnailToMark(action.meta, action.mark)
                break;
        }
        userStore.emitChange();
})
   
    
 

export default userStore;