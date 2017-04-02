var express = require("express");
var app = express();
var port = 3000;

//middleware - https://expressjs.com/en/guide/writing-middleware.html 
var middleware = {
    requiredAuthentication: function(req, res, next) {
        console.log("privat route hit");
        next();
    },

    logger: function(req,res,next) {
        console.log(new Date().toString() +  "  " + req.method + "  " + req.originalUrl);
        next();
    }
}

//Here we are calling middleware function on application level. It means it will execute everytimes application make a req.
//app.use(middleware.requiredAuthentication);

app.use(middleware.logger);

//Here we calling middleware function on route level. it will only execute if that specifies route make a request.
app.get('/aboutus', middleware.requiredAuthentication, function(req, res) {
    res.send("AboutUs Page");
})

//Here we are defining our default public folder.
app.use(express.static(__dirname + "/public"))

app.listen(port, function() {
    console.log("Express server started on " + port );
});