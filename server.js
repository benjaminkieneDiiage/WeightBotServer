var fs = require('fs')
, http = require('http')
, socketio = require('socket.io');

var server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(fs.readFileSync(__dirname + '/index.html'));
        }).listen(8090, function() {
            console.log('Ecoute sur: http://localhost:8090');
            });

socketio.listen(server).on('connection', function (socket) {

        socket.on('message', function (msg) {
        console.log(socket.remoteAddress + ":" + socket.remotePort);
        socket.broadcast.emit('message', msg);
        });        
    });
};



/*net = require('net');

//tableau des robots
var bots = [];
net.createServer(function (socket) {

  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  bots.push(socket);
  socket.write(socket.name + " est connecté");
  socket.on('data', function (data) {
    broadcast(data, socket);
  });

  socket.on('end', function () {
    bots.splice(bots.indexOf(socket), 1);
    broadcast(socket.name + " est déconnecté.\n");
  });
  
  function broadcast(message, sender) {
    bots.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });
    process.stdout.write(message)
  }
}).listen(1337);

console.log("Serveur démarré sur le port 1337\n");*/