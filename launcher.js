var restify = require("restify"), handlebars = require("handlebars");
var parser = require("./util/FileParser.js");
var fs = require("fs");

//handlebars elements
var elements = {
    "navigation": '<div class="navdiv"><ul class="navigation"><li><a href="/" class="navtext">Home</a></li> <li><a href="/aboutus" class="navtext">About Us</a></li><li><a href="/projects" class="navtext">Projects</a></li><li><a href="contact" class="navtext">Contact Us</a></li></ul></div>'
    ,
    "footer": '<div class="footer"><ul class="addons"><li><a href="https://github.com/warx1a/AboutUs" class="navtext">View Our Source Code</a> </li> <li> <span class="navtext">Made By Hunter and Luke</span></li></ul></div>'
};

//placeholder for the html files
var files = {};

var server = restify.createServer({
    name: "About Us",
    version: "1.0.0"
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

//initial calling function
function init(callback) {
    fs.readFile(__dirname + "/public/html/landing.html", "utf8" , function(err,data) {
        if(err) {
            console.log(err);
        } else {
            var template = handlebars.compile(data);
            var result = template(elements);
            files["landing"] = result;
        }
    });
    fs.readFile(__dirname + "/public/html/aboutus.html", "utf8" , function(err,data) {
        if(err) {
            console.log(err);
        } else {
            fs.readFile(__dirname + "/public/static/LukeBio.rtf", "utf8", function(err,bio) {
                if(err) {
                    console.log(err);
                } else {
                    elements["lukebio"] = parser.parseBio(bio);
                    var template = handlebars.compile(data);
                    var result = template(elements);
                    files["aboutus"] = result;
                }
            });
        }
    });
    callback();
}

init(function() {
    //set up API routes
    server.get("/", function(req,res,next) {
        res.header("Content-Type", "text/html");
        res.write(files.landing);
        res.end();
        return next();
    });

    server.get("/aboutus", function(req,res,next) {
        res.header("Content-Type", "text/html");
        res.write(files.aboutus);
        res.end();
        return next();
    });

    // catch-all for static content
    server.get(/.*/, restify.serveStatic({
        directory: "./public"
    }));

    server.listen(process.env.PORT || 3000,function() {
        console.log("launched");
    });
});