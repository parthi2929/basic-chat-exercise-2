//1. Import
var express = require("express");
var routes = require('./routes/route.js');  
var http = require("http");
var socketIO = require("socket.io");

//2. Initialize
var app = express();
var server = http.Server(app);
var socketServer = socketIO(server);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//3. Routing
app.get("/", routes.home);


//4. Listening
var port = process.env.PORT || 8080;
server.listen(
    port,
    function(request, response)
    {
        console.log("Catch the action at http://localhost: " + port);
    }
);

//5. SOCKET OPERATIONS.. 
socketServer.on(
    "connection",   //New socket connection event
    function(socketFromClient)
    {
        console.log("New socket detected");

        socketFromClient.on(
            "disconnect", //A socket disconnects
            function()
            {
                console.log("Server: A socket disconnected");
            }
        );

        socketFromClient.on(
            "New Message Event",    //In case a new message arrives
            function(newMessage)    //Socket.io provides that new message in cb
            {
                console.log("Server: New message arrived = " + newMessage);

                //Broadcast this to all other clients..
                socketServer.emit(
                    "Broadcast Event",
                    newMessage
                );
            }
        );
    }
);