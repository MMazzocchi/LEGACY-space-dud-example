$(function() {
  function callBack(player_id) {
    $('#player_id')[0].innerHTML = "Player ID: "+player_id;
    $('#status')[0].innerHTML = "Plug in a controller and press any button.";
  }

  var client = new ControllerConnection(callBack);

  function findControllers() {
    client.findControllers();
  }

  function connectedHandler(e) { 
    client.connectedHandler(e);

    if(client.numberControllersDetected() == 0) {
      $('#status')[0].innerHTML = "Plug in a controller and press any button.";
    } else {
      $('#status')[0].innerHTML = "Controller detected! Ready to play.";
    }
  }

  function disconnectedHandler(e) {
    client.disconnectedHandler(e);
  }

  setInterval(findControllers, 500);

  window.addEventListener("gamepadconnected", connectedHandler);
  window.addEventListener("gamepaddisconnected", disconnectedHandler);
});
