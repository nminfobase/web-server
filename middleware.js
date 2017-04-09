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
module.exports = middleware;