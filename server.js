var express = require( "express" );
var app = express();
var http = require( "http" );
app.use( express.static( "./public" ) ); // where the web page code goes
var http_server = http.createServer( app ).listen( 4242 );
var http_io = require( "socket.io" )( http_server );

http_io.on( "connection", function( httpsocket ) {
    httpsocket.on( 'python-message', function( fromPython ) {
        httpsocket.broadcast.emit( 'message', fromPython );
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