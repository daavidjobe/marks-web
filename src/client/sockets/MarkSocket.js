import MarkActions from '../actions/mark-actions';
import 'whatwg-fetch';

class MarkSocket {

  constructor() {
    fetch('/api/port').then(res => res.text())
    .then(port => {
      console.log(port);
      this.socket = new WebSocket(`ws://${location.hostname}:${port}/api/socket/`);
    this.socket.onopen = function () {
      console.log('open');
    };
    this.socket.onerror = function (e) {
      console.log(e);
    };
    this.socket.onmessage = function (e) {
      console.log('socket recieves message');
      let mark = JSON.parse(e.data);
      MarkActions.addPublicMark(mark);
    };
    })
  }
  
  sendMessage(message) {
    console.log('socket sends message');
    this.socket.send(JSON.stringify(message));
  }

}

let markSocket = new MarkSocket();
export default markSocket;