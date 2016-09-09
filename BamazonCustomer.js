var mysql = require('mysql');
var inquirer = require('inquirer');

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

connection.query('SELECT * FROM Products', function(err, res) {
	if (err) throw err;

	console.log("~~~~Welcome to Bamazon!~~~~");
	console.log("What would you like to buy?");
	for (var i = 0; i < res.length; i++){

	console.log(res[i].ItemID + " " + res[i].ProductName + " " + res[i].DepartmentName + " $" + res[i].Price + " " + res[i].StockQuantity);	
	}
	
})

// inquirer.prompt([{
//         name: "post",
//         message: "Would you like to post or bid on an item?"
    
//     }]).then(function(answers) {
       
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