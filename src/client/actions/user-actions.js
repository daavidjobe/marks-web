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
  }
}