var restify = require("restify"), handlebars = require("handlebars");
var fs = require("fs");

var login = require("./db/login.js");

//handlebars elements
var elements = {
    "navigation": '<div class="navdiv"><ul class="navigation"><li><a href="/" class="navtext">Home</a></li> <li><a href="/about" class="navtext">About Me</a></li><li><a href="/projects" class="navtext">Projects</a></li><li><a href="/contact" class="navtext">Contact Me</a></li></ul></div>'
    ,
    "footer": '<div class="footer"><ul class="addons"><li><a href="https://github.com/warx1a/AboutUs" class="navtext">View The Source Code</a> </li> <li> <span class="navtext">Made By Luke Jensen</span></li></ul></div>'
    ,
    "title" : "About Me",
    "age": 19,
    "gradelevel": "sophomore",
    "school": "the University of Nebraska - Lincoln",
    "twdesc": "This program will auto-attack villages for you using your troops. It will cycle between the villages you own as troops are exhausted.",
    "kawdesc": "This program analyzes Kingdoms At War allies and calulates the best composite score as a ratio of stats to price of the ally. Guaranteed to flip allies quickly."};

//placeholder for the html files
var files = {};

var server = restify.createServer({
    name: "About Me",
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
    fs.readFile(__dirname + "/public/html/projects.html", "utf8", function(err,data) {
        if(err) {
            console.log(err);
        } else {
            var template = handlebars.compile(data);
            var result = template(elements);
            files["projects"] = result;
        }
    });
    fs.readFile(__dirname + "/public/html/contact.html", "utf8", function(err,data) {
        if(err) {
            console.log(err);
        } else {
            var template = handlebars.compile(data);
            var result = template(elements);
            files["contact"] = result;
        }
    });
    fs.readFile(__dirname + "/public/html/aboutus.html", "utf8" , function(err,data) {
        if(err) {
            console.log(err);
        } else {
            fs.readFile(__dirname + "/public/static/LukeBio.txt", "utf8", function(err,bio) {
                if(err) {
                    console.log(err);
                } else {
                    var tempbio = handlebars.compile(bio);
                    var biography = tempbio(elements);
                    elements["lukebio"] = biography;
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

    server.get("/about", function(req,res,next) {
        res.header("Content-Type", "text/html");
        res.write(files.aboutus);
        res.end();
        return next();
    });

    server.get("/projects", function(req,res,next) {
        res.header("Content-Type", "text/html");
        res.write(files.projects);
        res.end();
        return next();
    });

    server.get("/contact", function(req,res,next) {
        res.header("Content-Type", "text/html");
        res.write(files.contact);
        res.end();
        return next();
    });

    server.get("/login/:username/:password", function(req,res,next) {
        res.header("Content-Type", "application/json");
        console.log(req.params);
        login.checkLogin(req.params.username, req.params.password);
        res.write("ok");
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