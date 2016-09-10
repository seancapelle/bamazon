//Grab node packages
var mysql = require('mysql');
var inquirer = require('inquirer');

//mySql connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "BamazonDB"
});

connection.connect(function(err) {
	if(err) throw err;
		console.log("Connected as ID: " + connection.threadId);
	});


function main(){
	//Select all Products
	connection.query('SELECT * FROM Products', function(err, res) {
		if(err) throw err;
		console.log(" ");
		console.log("~~~~Welcome to Bamazon!~~~~");
		console.log("Where shopping is BA-MAZING!");
		console.log(" ");

		//Loop to display all items
		for (var i = 0; i < res.length; i++){

		console.log(res[i].ItemID + " " + "'" + res[i].ProductName + "'" + " " + res[i].DepartmentName + " $" + res[i].Price + " x" + res[i].StockQuantity);	
		}

		console.log(" ");

		//Get user info
		select();
	});
}

//Prompt user what they would like to buy
function select(){
	
	inquirer.prompt([{
	        name: "id",
	        message: "Which item would you like to buy?"
	    }, {
	    	name: "units",
	    	message: "How many would you like to buy?"
	    
	    }]).then(function(answers) {
	    	
	    	//Assign input to variables
	    	var itemSelect = answers.id;
	    	var numSelect = answers.units;

	    	//Go to itemCheck
	    	stockCheck(itemSelect, numSelect);
	    });
	    
}

//See if enough items are in stock to fulfill order
function stockCheck(itemSelect, numSelect){

	console.log("In stockCheck");

	//Connect to DB to look at all Products
	connection.query('SELECT * FROM Products', function(err, res) {
		if(err) throw err;
		
			//Loop through all items
			for (var i = 0; i < res.length; i++){
				
				//Find the itemID user selected
				if(itemSelect == res[i].ItemID)
					
					//Set the current stock
					var currentStock = res[i].StockQuantity;

				}

				//If user requested more than in stock
				if (numSelect > currentStock){
					console.log("Insufficient quantity!");

					//Go back to main
					main();
				}
				else {

					console.log("Subtracted " + numSelect);
						
				}
					
			//Move to cashOut
			cashOut(numselect);
		});
}

//Update DB to reflect change in stock, show price
function cashOut(numselect){

console.log("In cashOut");
//Grab item price * numselect;

	// connection.query("UPDATE products SET ? WHERE ?", [{
// 	quantity: 100
// }, {
// 	flavor: "Rocky Road"
// }], function(err, res) {});

}

//Start the app       
main();