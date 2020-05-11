'use strict';

// Set up MySQL connection.
const mysql = require('mysql');
let connection;

if (process.env.JawsDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'penguin',
    database: 'burger_db',
  });
};


connection.connect();

module.exports = connection;