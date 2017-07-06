$(function() {
  var client = new DisplayConnection();
  client.onAnyChange(function(data) {
    $('#status')[0].innerHTML = "Received event: "+JSON.stringify(data);
  });

  client.onControllerEvent('button', 1, function(data) {
    console.log("Button #1 pressed: "+data.value);
  });

  client.onControllerEvent('axis', 1, function(data) {
    console.log("Axis #1 value: "+data.value);
  });

  function playerChoiceCallback(valid) {
    if(valid) {
      $('#content')[0].innerHTML = "";
      $('#status')[0].innerHTML = "Waiting for events...";
    } else {
      $('#status')[0].innerHTML = "Invalid player ID. Try again.";
    }
  }

  $('#submit_player_id').click(function(e) {
    var player_id = $('#player_id')[0].value;

    client.selectPlayer(player_id, playerChoiceCallback);
  });
});
