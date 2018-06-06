/*var net = require('net');
var JsonSocket = require('json-socket');

var port1 = 4242;

var io = require('socket.io');

var server = net.createServer();

server.listen(port1);
server.on('connection', function(socket) {
    liste=[];
    object={};
    liste.push(socket.remoteAddress);
    console.log(liste);
    socket = new JsonSocket(socket);
    var n;
    var isRunning = false;
    var streatTimeout;
    
    socket.on('data', function(data) {
        var str= data.toString();
        console.log("veri : "+data.toString());    
        var array = str.split(',');
        console.log(array);
        io.emit(array[0],array)
    });
});

console.log("Serveur démarré sur le port 4242\n");
*/
net = require('net');

//tableau des robots
var bots = [];
net.createServer(function (socket) {
  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  bots.push(socket.id);
  console.log(socket.id + " est connecté");

 /* socket.on('data', function (data) {
    broadcast(data, socket);
  });
*/

   io.sockets.connected[bots[0]].emit("coucou", "t'est pas beau");

  /*socket.on('end', function () {
    bots.splice(bots.indexOf(socket), 1);
    broadcast(socket.name + " est déconnecté.\n");
  });*/
  
  /*function broadcast(message, sender) {
    bots.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });
    process.stdout.write(message)
  }*/
}).listen(4242);

console.log("Serveur démarré sur le port 4242\n");