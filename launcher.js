var servestatic = require("serve-static");
var express = require("express");

var app = express();

app.use(servestatic(__dirname + "/public"));
app.listen(3000);
console.log("launched");
console.log(__dirname);