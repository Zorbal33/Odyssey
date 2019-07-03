const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'xxxxx',
  password : 'xxxxx',
  database : 'odyssey'
});
module.exports  =  connection;
