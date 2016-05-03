import {dispatch, register} from '../dispatchers/dispatcher';
import UserConstants from '../constants/user-constants';
import {EventEmitter} from 'events';
import UserAPI from '../api/user-api';


const CHANGE_EVENT = 'change';

class UserStore extends EventEmitter {
    
    constructor() {
        super();
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
    
    updateUser() {
        this._setToken()
        this.user = {
            authenticated: this.isLoggedIn(),
            token: this._getToken()
        }
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
        this.user = {
            authentixated: false,
            token: undefined
        };
    }
    
}
    

let userStore = new UserStore();
userStore.dispatchToken = register((action) => {
    switch (action.actionType) {
            case UserConstants.REGISTRATION_COMPLETE:
                userStore.updateUser()
                break;
            case UserConstants.LOGIN_COMPLETE:
                userStore.updateUser()
                break;
            case UserConstants.LOGOUT:
                userStore.logout()
                break;
        }
        userStore.emitChange();
})
   
    
 

export default userStore;