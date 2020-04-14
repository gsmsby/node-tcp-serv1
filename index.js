console.log('hell');
const net = require ('net');
const port = 7000;
const addr = '192.168.1.102';

const server = net.createServer();
server.listen(port,addr,() => {
    console.log ("server running. on port" + port + ".")
})


let sockets = [];

process.on ( 'uncaughtException' , function ( err ) { 
    console .log (err.stack); 
    console .log ( 'NOT exit ...' ); 
    }); 

server.on('error', function () {
    console.log ('ada error');
})

server.on('connection', function(sock) {
    console.log ('Connected :' + sock.remoteAddress + ' : ' + sock.remotePort);
    sockets.push(sock);

})




console.log('sth array di update...HALT disini');