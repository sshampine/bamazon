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
		console.log(answer)
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
				results[i].price + " | Quantity: " + results[i].stock_quantity);
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
				results[i].price + " | Quantity: " + results[i].stock_quantity);
		}
		console.log("------------------------------")
	})
};

function addInventory() {
	console.log("add Inventory")
};

function newInventory() {
	console.log("new Inventory")
};