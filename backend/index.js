const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

app.use(cors());

const server = http.createServer(app);


const io = new Server(server,
    
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
    
    );
 
    ///io

    io.on('connection', (socket) => {
       // console.log(socket.id);
        console.log('user connected',socket.id);


        socket.on("disconnect", () => {
            console.log("User disconnected",socket.id);
        } );
    } );

server.listen(3001, () => {
  console.log('running on port 3001');
}   );