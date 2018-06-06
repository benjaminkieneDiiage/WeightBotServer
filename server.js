var fs = require('fs')
, http = require('http')
, socketio = require('socket.io');

var server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(fs.readFileSync(__dirname + '/index.html'));
        }).listen(8090, function() {
            console.log('Listening at: http://192.168.43.156:4242');
            });

socketio.listen(server).on('connection', function (socket) {

        socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
        });        
    });



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
}).listen(4242);

console.log("Serveur démarré sur le port 4242\n");*/