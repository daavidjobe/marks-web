import {dispatch, register} from '../dispatchers/dispatcher';
import UserConstants from '../constants/user-constants';
import {EventEmitter} from 'events';
import UserAPI from '../api/user-api';


const CHANGE_EVENT = 'change';

class UserStore extends EventEmitter {
    
    constructor() {
        super();
        this.user = {};
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
    
    setUser() {
        this._setToken()
        this.user = {
            authenticated: this.isLoggedIn(),
            token: this.getToken()
        }
    }
    
    isLoggedIn() {
        return !!localStorage.token;
    }
    
    getToken() {
        return localStorage.token;
    }
    
    _setToken() {
        localStorage.token = Math.random().toString(36).substring(7);
    }
    
    logout() {
        delete localStorage.token;
        this.user = {};
    }
    
}
    

let userStore = new UserStore();
userStore.dispatchToken = register((action) => {
    switch (action.actionType) {
            case UserConstants.REGISTRATION_COMPLETE:
                userStore.setUser()
                break;
            case UserConstants.LOGIN_COMPLETE:
                userStore.setUser()
                break;
            case UserConstants.LOGOUT:
                userStore.logout()
                break;
        }
        userStore.emitChange();
})
   
    
 

export default userStore;