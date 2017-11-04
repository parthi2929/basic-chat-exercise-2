//1. Import
var express = require("express");
var routes = require('./routes/route.js');  
var http = require("http");

//2. Initialize
var app = express();
var server = http.Server(app);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


//3. Routing
app.get("/", routes.home);
app.get("/:user", routes.userRoute);


//4. Listening
var port = process.env.PORT || 8080;
server.listen(
    port,
    function(request, response)
    {
        console.log("Catch the action at http://localhost: " + port);
    }
);