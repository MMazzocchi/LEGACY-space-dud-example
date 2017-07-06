
var HOST = '0.0.0.0';
var PORT = 3000;

var express = require('express');
var app = express();
var http = require('http').Server(app);
var gamepad = require('gamepad-event-tunnel')(http);

app.use('/css', express.static(__dirname + '/controller_client/css'));
app.use('/js', express.static(__dirname + '/controller_client/js'));

app.use('/css', express.static(__dirname + '/display_client/css'));
app.use('/js', express.static(__dirname + '/display_client/js'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/js', express.static(__dirname + '/node_modules/gamepad-event-tunnel/client')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 

app.get('/controller', function(req, res){
  res.sendFile(__dirname + '/controller_client/index.html');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/display_client/index.html');
});

http.listen(PORT, HOST, function(){
  console.log('listening on '+HOST+':'+PORT);
});
