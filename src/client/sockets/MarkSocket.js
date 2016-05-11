import MarkActions from '../actions/mark-actions';

class MarkSocket {

  constructor() {
    this.socket = new WebSocket("ws://" + location.hostname + "/api/socket/");
    this.socket.onopen = function () {
      // socket is connected
      console.log('open');
    };
    this.socket.onerror = function (e) {
      console.log(e);
    };
    this.socket.onmessage = function (e) {
      let mark = JSON.parse(e.data);
      MarkActions.addPublicMark(mark);
    };
  }
  
  sendMessage(message) {
    this.socket.send(JSON.stringify(message));
  }

}

let markSocket = new MarkSocket();
export default markSocket;