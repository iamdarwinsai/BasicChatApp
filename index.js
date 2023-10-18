const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('from_client', (msg) => {
      console.log(`Recived message : ${msg}`);
    });
  });
server.listen(3000, () => {
    console.log("Sever started on 3000");

});
