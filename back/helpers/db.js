const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'xxxx',
  password : 'xxxx',
  database : 'odyssey'
});
module.exports  =  connection;
