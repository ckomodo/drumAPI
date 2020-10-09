var express = require("express");

var app = express();
var PORT = 3030;

//sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const drumSet = [
    {
        drumName: "snare",
        brand: "ludwig",
        size: "14 inch",
        buildYear: "1919"
    },
    {
        drumName: "jembe",
        brand: "mandinka",
        size: "17 inch",
        buildYear: "1950"
    },
    {
        drumName: "round drum",
        brand: "coast",
        size: "10 inch",
        buildYear: "2009"
    }
]



//sets up a route to the homepage. The "/" means localhost3030/ which is the homepage
app.get("/", function (req, res) {
    res.send("drum api is working");
    // console.log("drum api working");

});


//creates a new page to be accessed thru: localhost3030/api/drums
app.get("/api/drums", function (req, res) {
    return res.json(drumSet);
    
});


app.post("/api/drums", function(req, res){
    // console.log(req.body); logs new object
    // res.json(req.body) displays new object on postman
    const newDrum = {
        drumName: req.body.drumName,
        brand: req.body.brand,
        size: req.body.size,
        buildYear: req.body.buildYear
    }



})





//launch the server
app.listen(PORT, function () {
    console.log("APP listening on PORT" + PORT);
});