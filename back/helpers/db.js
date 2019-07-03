const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'elte0024',
  database : 'odyssey'
});
module.exports  =  connection;