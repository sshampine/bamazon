var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host			:  		"127.0.0.1",
	user			: 		"root",
	password		: 		"",
	database		: 		"bamazon_DB"
});

connection.connect(function(error){
	if(error) throw error;
	start();
});

function start() {
	inquirer.prompt({
		name: "mgrFunctions",
		type: "rawlist",
		message: "Would you like to [View] Products for Sale, View [Low] Inventory, [Add] to Inventory, or Add [New] Product?",
		choices: ["View", "Low", "Add", "New"]
	})
	.then(function(answer){
		//console.log(answer)
		if (answer.mgrFunctions === "View") {
			viewProducts()
		} else if(answer.mgrFunctions === "Low") {
			lowInventory()
		} else if(answer.mgrFunctions === "Add") {
			addInventory()
		} else {
			newInventory()
		}
	});
}

function viewProducts() {
	console.log("Viewing Product Inventory---------------------------");
	connection.query("SELECT * FROM products", function(error, results){
		if (error) throw error;
		//console.log(results);
		for (var i = 0; i < results.length; i++) {
			console.log("id: " + results[i].item_id + " | Product Name: " + results[i].product_name + " | Price: " +
				results[i].price + " | Quantity: " + results[i].stock_quantity + " | Dept: " + results[i].department_name);
		}
		console.log("------------------------------")
		//start();
	})
};

function lowInventory() {
	console.log("Viewing Product Inventory---------------------------")
	connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(error, results){
	if (error) throw error;
		//console.log(results);
		for (var i = 0; i < results.length; i++) {
			console.log("id: " + results[i].item_id + " | Product Name: " + results[i].product_name + " | Price: " +
				results[i].price + " | Quantity: " + results[i].stock_quantity + " | Dept: " + results[i].department_name);
		}
		console.log("------------------------------")
	})
};

function addInventory() {
	console.log("Adding Product Inventory---------------------------")
	connection.query("SELECT * FROM products", function(error, results) {
		if (error) throw error;
		var prodArray = [];
		for (var i = 0; i < results.length; i++) {
			prodArray.push(results[i].product_name)
		}
		inquirer.prompt([
		{
			type: "list",
			name: "product",
			choices: prodArray,
			message: "Which item would you like to add to inventory?"
		},
		{
			type: "input",
			name: "quantity",
			message: "How much inventory to add?"
		},
		]).then(function(answers){
			connection.query("UPDATE products SET ? WHERE ?", [
				{stock_quantity: answers.quantity},
				{product_name: answers.product}


				], function(error, results) {
					if (error) throw error
					console.log("Inventory updated")
					start();
				})
		})
	})
	
};

function newInventory() {
	console.log("Add New Product to Inventory---------------------------")
	var deptArray = [];
	connection.query("SELECT * FROM products", function(error, results) {
		if (error) throw error;
		
		for (var i = 0; i = results.length; i++) {
			deptArray.push(results[i].department_name)
		}
	})
	inquirer.prompt([
	{
		type: "input",
		name: "product",
		message: "New Product Name:"
	},
	{
		type: "list",
		name: "departmentName",
		choices: deptArray,
		message: "Select department for new item:"
	},
	{
		type: "input",
		name: "price",
		message: "Enter price for new item:"
	},
	{
		type: "input",
		name: "quantity",
		message: "Enter quantity for new item:"
	}

		]).then(function(answers) {
			connection.query("INSERT INTO products SET ?", {
				product_name: answers.product,
				department_name: answers.deptArray,
				price: answers.price,
				stock_quantity: answers.quantity
			}, function(error, results) {
				if (error) throw error
				console.log("New item successfully added to inventory.")
			})
			start();
		})
};