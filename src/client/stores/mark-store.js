import {dispatch, register} from '../dispatchers/dispatcher';
import MarkConstants from '../constants/mark-constants';
import {EventEmitter} from 'events';



/*
  A model store responsible for keeping track of Marks
*/

const CHANGE_EVENT = 'change';

class MarkStore extends EventEmitter {
  
  constructor() {
    super();
    this.publicMarks = [];
    this.popularMarks = [];
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
    this.publicMarks = publicMarks;
  }
  
  setPopularMarks(popularMarks) {
    this.popularMarks = popularMarks;
  }
  
  addPublicMark(publicMark) {
    this.publicMarks = [publicMark, ...this.publicMarks];
  }
  
  getPublicMarks() {
    return this.publicMarks;
  }
  
  getPopularMarks() {
    return this.popularMarks;
  }
  
  promote(mark) {
    let publicMarks = this.publicMarks.map(m => {
      if(m.url === mark.url) {
        m.promotions++;
      }
      return m;
    })
    this.publicMarks = publicMarks;
  }
  
  demote(mark) {
    let publicMarks = this.publicMarks.map(m => {
      if(m.url === mark.url) {
        m.demotions++;
      }
      return m;
    })
    this.publicMarks = publicMarks;
  }
    
}

let markStore = new MarkStore();
markStore.dispatchToken = register((action) => {
  switch (action.actionType) {
    case MarkConstants.FETCH_PUBLISHED_MARKS:
    markStore.setPublicMarks(action.marks); 
    break;
    case MarkConstants.FETCH_POPULAR_MARKS:
    markStore.setPopularMarks(action.marks);
    break;
    case MarkConstants.ADD_PUBLIC_MARK:
    markStore.addPublicMark(action.mark);
    break;
    case MarkConstants.PROMOTE:
    markStore.promote(action.mark);
    break;
    case MarkConstants.DEMOTE:
    markStore.demote(action.mark);
    break;
  }
  markStore.emitChange();
})
   
    
 

export default markStore;