var port = 4242;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(port, function()
{
  io.on('connection', onConnect);
  console.log('listening on *:'+port);
});


function onConnect(socket)
{
  console.log("connected from "+socket);
}
      
/*var net = require('net');
var io = require('socket.io');

var port = 4242;
//tableau des robots
var bots = [];
net.createServer(function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  bots.push(socket);
  console.log(socket.ip + " est connecté");



  socket.on('end', function () {
    bots.splice(bots.indexOf(socket), 1);
    broadcast(socket.name + " est déconnecté.\n");
  });
  
}).listen(port);

console.log("Serveur démarré sur le port "+port);*/