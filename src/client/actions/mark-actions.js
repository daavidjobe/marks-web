import MarkConstants from '../constants/mark-constants';
import {dispatch, register} from '../dispatchers/dispatcher';
import MarkAPI from '../api/mark-api';

export default {
    
    addMark(url, email) {
        MarkAPI.addMark(url, email).then(res => {
            dispatch({actionType: MarkConstants.ADD_MARK, data: res})
            this.fetchMarkMeta(res);
        })
    },
    
    removeMark(mark) {
        MarkAPI.removeMark(mark).then(res => {
            dispatch({actionType: MarkConstants.REMOVE_MARK, data: mark})
        })
    },
    
    fetchMarkMeta(mark) {
        MarkAPI.fetchMarkMeta(mark).then(res => {
            dispatch({actionType: MarkConstants.FETCH_MARK_META, meta: res, mark})
        })
    }
}