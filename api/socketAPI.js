const io = require('socket.io')();
const client = require('prom-client');

const socketapi = {
  io
};
const gauge = new client.Gauge({ name: 'number_of_clients', help: 'number of clients that connected using socket.io' });

io.on('connection', (socket) => {
  console.log('a user connected');
  gauge.inc(1);

  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
    socket.broadcast.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    gauge.dec(1);
  });
});

module.exports = socketapi;
