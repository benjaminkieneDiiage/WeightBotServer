var app = require('http').createServer()
var io = require('socket.io')(app);
var port = 4242;

app.listen(4242);

io.on('connect', onConnect);

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