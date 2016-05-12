import MarkConstants from '../constants/mark-constants';
import {dispatch} from '../dispatchers/dispatcher';
import MarkSocket from '../sockets/MarkSocket';
import MarkAPI from '../api/mark-api';

export default {

    addMark(url, email) {
        MarkAPI.addMark(url, email).then(res => {
            dispatch({ actionType: MarkConstants.ADD_MARK, data: res })
            this.fetchMarkMeta(res);
        })
    },

    addPublicMark(mark) {
        dispatch({ actionType: MarkConstants.ADD_PUBLIC_MARK, mark })
    },

    removeMark(mark) {
        MarkAPI.removeMark(mark).then(res => {
            dispatch({ actionType: MarkConstants.REMOVE_MARK, data: mark })
        })
    },

    fetchMarkMeta(mark) {
        MarkAPI.fetchMarkMeta(mark).then(meta => {
            MarkAPI.assignMetaToMark(mark, meta).then(() => {
                dispatch({ actionType: MarkConstants.FETCH_MARK_META, mark, meta })
            })
        })
    },

    fetchPublicMarks() {
        MarkAPI.fetchPublicMarks().then(marks => {
            dispatch({ actionType: MarkConstants.FETCH_PUBLISHED_MARKS, marks })
        })
    },

    promote(mark, email) {
        MarkAPI.promote(mark, email).then(res => {
            if(res === true)
            dispatch({ actionType: MarkConstants.PROMOTE, mark, res })
        })
    },

    demote(mark, email) {
        MarkAPI.demote(mark, email).then(res => {
            if(res === true)
            dispatch({ actionType: MarkConstants.DEMOTE, mark, res })
        })
    }
}
