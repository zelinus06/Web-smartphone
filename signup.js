function signup() {
    var sdt = document.getElementById('sdt').value;
    var password = document.getElementById('password').value;
    var rpassword = document.getElementById('rpassword').value;

var username = {
    sdt: sdt,
    password: password,
}
var json = JSON.stringify(username);
localStorage.setItem(sdt, json);
}


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

var sql = "INSERT INTO account (sdt, password) VALUES (sdt, password)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });