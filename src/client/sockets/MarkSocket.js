import MarkStore from '../stores/mark-store';

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
      MarkStore.addPublicMark(mark);
    };
  }
  
  sendMessage(message) {
    this.socket.send(message);
  }

}

let markSocket = new MarkSocket();
export default markSocket;