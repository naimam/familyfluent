var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "familyfluent-db.cjrh3fzzivoz.us-east-1.rds.amazonaws.com",
    user: "savage",
    password: "Savage$$$",
    port: '3306',
    database: "familyfluent"
});

connection.connect()

connection.query('SELECT * FROM Users', function (err, rows, fields) {
if (err) throw err

console.log('The solution is: ')
})

app.get("/test", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

connection.end()