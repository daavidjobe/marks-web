import {dispatch, register} from '../dispatchers/dispatcher';
import MarkConstants from '../constants/mark-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

class MarkStore extends EventEmitter {
  
  constructor() {
    super();
    this.publicMarks = [];
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
  
  setPublicMarks(publicMarks) {
    console.log(publicMarks);
    this.publicMarks = publicMarks;
  }
  
  addPublicMark(publicMark) {
    this.publicMarks = [...this.publicMarks, publicMark];
  }
  
  getPublicMarks() {
    return this.publicMarks;
  }
    
}

let markStore = new MarkStore();
markStore.dispatchToken = register((action) => {
  switch (action.actionType) {
    case MarkConstants.FETCH_PUBLISHED_MARKS:
    markStore.setPublicMarks(action.marks); 
    break;
    case MarkConstants.ADD_PUBLIC_MARK:
    markStore.addPublicMark(action.mark);
    break;         
  }
  markStore.emitChange();
})
   
    
 

export default markStore;