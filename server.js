var port = 4242;
var http = require('http');
var io = require("socket.io");
var app = http.createServer();
app.listen(port);

var io = io.listen(app);

io.sockets.on('connection', function (socket) 
{
    socket.emit('connection from '+ socket);
});

      
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