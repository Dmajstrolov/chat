const express = require("express");

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + "/client"));

io.on('connection',socket =>{
    console.log(socket.id);

  /*   socket.on("data",data=>{
        console.log(data);

        io.emit("serverData", data+"-server");


    }); */

    socket.on("chat",data=>{

        io.emit("chat", data);

    });

    socket.on("type",name=>{
        io.emit("type", name + " is typing...");
    });

});




http.listen(3400,()=>{
    console.log("port 3400");
});