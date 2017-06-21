
var HOST = '0.0.0.0';
var PORT = 3000;

var express = require('express');
var app = express();
var http = require('http').Server(app);
var gamepad = require('gamepad-server-plugin')(http);

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/js', express.static(__dirname + '/node_modules/gamepad-server-plugin/js')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

http.listen(PORT, HOST, function(){
  console.log('listening on '+HOST+':'+PORT);
});
