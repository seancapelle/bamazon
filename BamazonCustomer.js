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

//Select all Products
connection.query('SELECT * FROM Products', function(err, res) {
	if (err) throw err;

	console.log("~~~~Welcome to Bamazon!~~~~");

	//Loop to display all items
	for (var i = 0; i < res.length; i++){

	console.log(res[i].ItemID + " " + "'" + res[i].ProductName + "'" + " " + res[i].DepartmentName + " $" + res[i].Price + " x" + res[i].StockQuantity);	
	}

	//Get user info
	buy();
});

//Prompt user what they would like to buy
function buy(){
	
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
	    	itemCheck(itemSelect, numSelect);
	    });
	    
}

//See if enough items are in stock to fulfill order
function itemCheck(itemSelect, numSelect){

	//Connect to DB to look at all Products
	connection.query('SELECT * FROM Products', function(err, res) {
		if(err) throw err;
		
			//Loop through all items
			for (var i = 0; i < res.length; i++){
				

				if(itemSelect == res[i].ItemID)
					console.log(res[i].ProductName);
				}

		});
}
       
//        if (answers.post === "post"){
//       	post();
//    }
//    else {
//       bid();
//    }
        
//     })
// function display(){

// 	connection.query('SELECT * FROM Products', function(err, res) {
// 		if(err) throw err;
// 		console.log(res);
// 	});
// }