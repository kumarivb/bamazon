// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// connection information for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "asdf",
    database: "bamazon"
});

// connect to mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    console.log("you are connected!");
});