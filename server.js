var port = 4242;
var express = require('express');
var http = require('http');
var socket = require('socket-io-server');
var app = express();
var server = http.Server(app);
 

socket.init(server);
server.listen(port);
 
// Listen for incoming events from a client.
// Note that a web socket client id is required, this id is emitted by the
// socket server when a client connects.
socket.on('ws-client-id', 'incoming', function (data) 
{
    console.log(data);
});
 
// Emit an event with data to all connected clients except for the
// client that started the event.
// Note that a web socket client id is required, this id is emitted by the
// socket server when a client connects.
socket.broadcast('ws-client-id', 'emit-client', 
{
    data: []
});
 
// Emit an event with data to a specific client.
// Note that a web socket client id is required, this id is emitted by the
// socket server when a client connects.
socket.emit('ws-client-id', 'emit-client', 
{
    data: []
});
 
// Emit an event with data to all connected clients.
socket.emitAll('emit-clients', 
{
    data: []
});
 
// Access the socketServer object (socket.io constructor).
socket.socketServer;
 
// Close the socket server connection.
socket.close();
// Close the http server connection.
server.close();
      
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