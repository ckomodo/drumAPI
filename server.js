var express = require ("express");

var app = express();
var PORT = 3000;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());










//launch the server
app.listen(PORT, function(){
    console.log("APP listening on PORT" + PORT);
});