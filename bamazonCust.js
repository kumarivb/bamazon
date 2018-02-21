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
    // console.log("you are connected!");

    // show database products
    showTable();
});

function showTable() {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
        } 
        console.log("-------------------------------------------");
    });
}


