net = require('net');

//tableau des robots
var bots = [];
net.createServer(function (socket) {

  socket.name = socket.remoteAddress + ":" + socket.remotePort 
  bots.push(socket);
  socket.write(socket.name + " connected");
  socket.on('data', function (data) {
    broadcast(data, socket);
  });

  socket.on('end', function () {
    bots.splice(bots.indexOf(socket), 1);
    broadcast(socket.name + " disconnect.\n");
  });
  
  function broadcast(message, sender) {
    bots.forEach(function (client) {
      if (client === sender) return;
      client.write(message);
    });
    process.stdout.write(message)
  }
}).listen(1337);

console.log("Chat server running at port 1337\n");