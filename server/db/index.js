var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pa#6502519087',
  database: 'chat'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected! Hi from index');
});


module.exports.connection = connection;