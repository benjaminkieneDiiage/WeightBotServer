const net = require('net');
const ip = require('ip');
const PORT = 4242;
const ADDRESS = ip.address();//'172.20.10.4';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var clients = []; //get ip address clients[i].remoteAddress

var server = net.createServer(function(socket) 
{
  clients.push(socket);
  socket.on('data', function (data) 
  {
    console.log(data.toString('utf8'));
    //socket.write("bienvenue");
  });
  for(var i = 0; i < clients.length; i++)
  {
    console.log(clients[i].remoteAddress);
  }
});
server.listen(PORT, ADDRESS);
console.log(ADDRESS+" - "+port);

function broadcast(message, receiver) 
{
  clients.forEach(function (client) 
  {
    if (client.remoteAddress == receiver) 
    {
       client.write(message);
    }
  });
}


rl.question('command ', (answer) => 
{
  if("forward" == answer)
  {
      broadcast("motor.py", "172.20.10.3");
  }
  
  rl.close();
});

      
/////////////////////////////////////////////////////////////////////////////////////////

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