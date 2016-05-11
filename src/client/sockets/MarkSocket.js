import MarkActions from '../actions/mark-actions';

class MarkSocket {

  constructor() {
    this.socket = new WebSocket("ws://" + location.hostname + "/api/socket/");
    this.socket.onopen = function () {
      console.log('open');
    };
    this.socket.onerror = function (e) {
      console.log(e);
    };
    this.socket.onmessage = function (e) {
      console.log('socket recieves message');
      let mark = JSON.parse(e.data);
      console.log(mark);
      MarkActions.addPublicMark(mark);
    };
  }
  
  sendMessage(message) {
    console.log('socket sends message');
    console.log(message);
    this.socket.send(JSON.stringify(message));
  }

}

let markSocket = new MarkSocket();
export default markSocket;