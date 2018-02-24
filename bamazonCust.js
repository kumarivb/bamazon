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
    // title
    console.log("\nBamazon Inventory");
    console.log("-------------------------------------------\n"); 

    // query db
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " \n ");
        }
        
        // prompt
        inquirer
            .prompt([
                {
                    name: "productId",
                    type: "input",
                    message: "What is the item number of the product you would like to purchase?",
                    validate: function(value) {
                        if (isNaN(value) === false && parseInt(value) <= res.length && parseInt(value) > 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    name: "units",
                    type: "input",
                    message: "How many would you like to purchase?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            ])
            .then(function(answers) {
                var chosenId = (answers.productId) - 1;
                var numUnits = parseInt(answers.units);
                var cost = parseFloat((res[chosenId].price) * numUnits);

                // see if there's enough
                if (res[chosenId].stock_quantity >= chosenId) {
                    connection.query("UPDATE products SET ? WHERE ?", [
                        {
                            stock_quantity: (res[chosenId].stock_quantity - numUnits)
                        },
                        {
                            item_id: answers.productId
                        }
                    ], function(err, res) {
                        if (err) throw err;
                        console.log("Your final total is $" + cost);
                    });
                }

                // update db
               

                    connection.query("SELECT * FROM products WHERE item_id = " + chosenId, function(err, res) {
                        if (err) throw err;
                        else {
                           // not enough
                                 console.log("Sorry. There are not enough of these items in-stock.")
                        }

                        // display table again
                        showTable();
                    });
                
            });
    });
};