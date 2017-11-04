var express = require("express");
var routes = require('./routes/route.js');

var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", routes.home);
app.get("/:user", routes.userRoute);

var port = process.env.PORT || 8080;

var server = app.listen(
    port,
    function(request, response)
    {
        console.log("Catch the action at http://localhost: " + port);
    }
);