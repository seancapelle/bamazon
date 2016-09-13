//Grab node packages
var mysql = require('mysql');
var inquirer = require('inquirer');

//MySql connection
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

//Main menu
function main(){

	//Select all products and display them
	connection.query('SELECT * FROM Products', function(err, res) {
		if(err) throw err;
	
		console.log("\n~~~~Welcome to Bamazon!~~~~\nWhere shopping is BA-MAZING!\n");

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

	//Connect to DB to look at all Products
	connection.query('SELECT * FROM Products', function(err, res) {
		if(err) throw err;
		
			//Loop through all items
			for (var i = 0; i < res.length; i++){

				
				
				//Find the itemID user selected
				if(itemSelect == res[i].ItemID){
					
					//Set the current stock
					var currentStock = res[i].StockQuantity;
					console.log(currentStock);

					//ID the product selected
					var product = res[itemSelect - 1].ProductName;

					//ID the price
					var price = res[itemSelect - 1].Price;

						//If user requested more than in stock
						if (numSelect > currentStock){
							
							console.log("\nInsufficient quantity!\n");

							//Try again! Maybe this time pay attention to how much they have! Huh? Did you think of that? #sorrynotsorry
							main();
						}
						else {

							//Take from currentStock and assign to stockUpdate
							var stockUpdate = currentStock - numSelect;

							//Update DB with change in stock
							connection.query("UPDATE products SET ? WHERE ?", [{StockQuantity: stockUpdate},
							{ItemID: itemSelect}], function(err, res){});

							//Set the total cost
							var total = price * numSelect;

							console.log("Thank you for purchasing " + "'" + product + "'! Your total comes to $" + total + ".");

							//Go back to main
							main();
						}

					}
				}
		});
}

//Start the app       
main();