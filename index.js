var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testuser',
  password : 'dD1354268!',
  database : 'test'
});
 
connection.connect();
 
connection.query('UPDATE test.new_table SET username = "강지민" WHERE id = 4', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end(); 
// connection.query('UPDATE test.new_table SET username = "thor" WHERE id = 4', function (error, results, fields) {
