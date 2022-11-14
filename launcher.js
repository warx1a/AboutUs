//modules
var restify = require("restify"), handlebars = require("handlebars"), fs = require("fs");

var login = require("./db/login.js");

//handlebars elements
var elements = {
    "title" : "About Me",
    "gradelevel": "Graduated From SCC Lincoln",
    "employment": "Looking for work"
}
//placeholder for the html files
var files = {};

var server = restify.createServer({
    name: "About Me",
    version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

//initial calling function
function init(callback) {
    fs.readFile(__dirname + "/public/html/templates/header.html", "utf8", function(err, data) {
        if(err) {
            console.log(err);
        } else {
            data = data.replace(/\\r\\n/, "");
            elements["navigation"] = data;
        }
    });
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
    //read the aboutus page into memory
    fs.readFile(__dirname + "/public/html/aboutus.html", "utf8" , function(err,data) {
        if(err) {
            console.log(err);
        } else {
            //read my bio into memory
            fs.readFile(__dirname + "/public/static/LukeBio.txt", "utf8", function(err,bio) {
                if(err) {
                    console.log(err);
                } else {
                    //handlebars compile
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
        //admin login pannel
        login.checkLogin(req.params.username, req.params.password, function(responseCode, responseMessage) {
            var response = {
                responseCode : responseCode,
                responseMessage: responseMessage
            };
            console.log("resp:" + response);
            res.send(response);
            res.end();
            return next();
        });
    });

    // catch-all for static content
    server.get("*", restify.plugins.serveStatic({
        directory: "./public"
    }));

    //listen on 80 if deployed, otherwise 3000
    server.listen(process.env.PORT || 3000,function() {
        console.log("launched");
    });
});