var mysql = require("mysql");

var options = {
    user: "bb3d6f855234bc",
    host: "us-cdbr-iron-east-05.cleardb.net",
    database: "heroku_d193abd47eb484e",
    password: "fd526a3d",
    connectionLimit: 10
};

var connection = mysql.createPool(options);

function checkLogin(username, password,res) {
    connection.query("SELECT `login_name`,`login_password` FROM `users` WHERE `login_name` LIKE ? AND `login_password` LIKE ?", [username,password], function(err,data) {
        if(err) {
            console.log(err);
        } else {
            if(data.length == 1) {
                res(0, "Success");
            } else {
                res(1, "Invalid Login");
            }
        }
    });
}

exports.checkLogin = checkLogin;