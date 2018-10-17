const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'miturista'
});

let userModel = {};

userModel.getUsers =(callback) => {
	if (connection) {
		connection.query(
		 'select * from cliente order by id',
		 (err, rows) =>{
           if (err) {
           	throw err;
           }else{
           	callback(null, rows);
           }
		 }
		)
	}
};


userModel.insertUser =(userData, callback) => {
	if (connection) {
		connection.query(
		 'insert into cliente set ?', userData,
		 (err, result) =>{
           if (err) {
           	throw err;
           }else{
           	callback(null, {
           		'insertId': result.insertId
           	});
           }
		 }
		)
	}
};


module.exports = userModel;