var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    

var app = express();

var PORT = 3000;

// Static Public File
app.use(express.static(process.cwd() + "/public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Method Override
app.use(methodOverride("_method"));

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function()
{
    console.log("Listening on PORT: " + PORT);

});