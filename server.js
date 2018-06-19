const net = require('net');
const ip = require('ip');
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 4242;
const ADDRESS = "10.4.0.49";//ip.address()

var myRouter = express.Router(); 

var clients = []; //get ip address clients[i].remoteAddress

var server = net.createServer(function(socket) 
{
  clients.push(socket);
  socket.on('data', function (data) 
  {
    console.log(data.toString('utf8'));
  });
  /*for(var i = 0; i < clients.length; i++)
  {
    console.log(clients[i].remoteAddress);
  }*/
 
});
server.listen(PORT, ADDRESS);
console.log(ADDRESS+" - "+PORT);


myRouter.route('/startLigneDetect/').get(function(req,res)
{ 
    broadcast("solution2.py", "10.4.0.5");
      if(res.status(200))
    {
       res.json("Détection de ligne");
    }
    else
    {
      res.json("Problème pas de détection de ligne");
    } 
});


myRouter.route('/endpoint/').post(function(req,res)
{ 
    console.log(req.body);
    /*res.on('data', function (body) {
      console.log('Body: ' + body);
    });*/
});


myRouter.route('/stopMotor/').get(function(req,res)
{ 
    broadcast("stopMotor.py", "10.4.0.5");

    if(res.status(200))
    {
       res.json("Arrêt moteurs");
    }
    else
    {
      res.json("Moteurs non arrêtés");
    } 
});

myRouter.route('/startMotor/').get(function(req,res)
{ 
    broadcast("motor.py", "10.4.0.5");
     if(res.status(200))
    {
       res.json("Moteurs démarrés");
    }
    else
    {
      res.json("Moteurs non démarrés");
    } 
});

myRouter.route('/stopRobot/').get(function(req,res)
{ 
    broadcast("stopRobot.py", "10.4.0.5");
      if(res.status(200))
    {
       res.json("Tous les scripts arrêtés");
    }
    else
    {
      res.json("Pas de scripts arrêtés");
    } 
});

app.use(myRouter); 
app.listen(1337, ADDRESS, function(){
});

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
