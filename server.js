var expreess = require('express');
var app = expreess();
var server = app.listen(3000);

app.use(expreess.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection ' + socket.id);
    socket.on('mouse',mouseMessage)

    function mouseMessage(data){
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }

}

console.log("My socket server is running");