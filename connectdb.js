var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "db_smartphone",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
