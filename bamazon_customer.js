var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host			: 		"127.0.0.1",
	user 			: 		"root",
	password		: 		"",
	database		: 		"bamazon_DB"
})


function store() {
	connection.query("SELECT * FROM products", function(error, results){
		if (error) throw error;
		console.log("Welcome to Bamazon");
		for (var i = 0; i < results.length; i ++) {
			console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].department_name +
				" | " + results[i].price + " | " + results[i].stock_quantity)
			console.log("-----------------------------------------------------------");
		}
		inquirer.prompt([
		{
			type: "input",
			name: "id",
			message: "What is the ID of the product you wish to purchase?",
		},
		{
			type: "input",
			name: "quantity",
			message: "How many would you like to buy?"
		}

		]).then(function(answers){
			//console.log(results)
			var toBuy = (answers.id) -1
			//console.log(toBuy)
			var total = results[toBuy].price * answers.quantity
			//console.log(total)
			if(results[toBuy].stock_quantity >= answers.quantity) {
				connection.query("UPDATE products SET ? WHERE ?", [
					{stock_quantity: (results[toBuy].stock_quantity - answers.quantity)},
					{item_id: answers.id}
					], function(error, results){
						if(error) throw error;
						console.log("Your item(s) were processed for a total of $" + total)
					})
			} else {
				console.log("Not enough in stock, try another item")
			}
			reprompt();
		})
	})
}

function reprompt() {
	inquirer.prompt([
	{
		type: 	"confirm",
		name: 	"reply",
		message: "Would you like to make more purchases?"
	}]).then(function(answer) {
		if(answer.reply) {
			store();
		}else {
			console.log("Later!")
		}
		connection.end()
	})
}

store();