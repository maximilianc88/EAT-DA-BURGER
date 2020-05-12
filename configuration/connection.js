'use strict';

const mysql = require('mysql');

const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'penguin',
    database: 'burger_db'
};

if (process.env.JAWSDB_URL) {
     mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection(connection);
};

db.connect(err => {
    if (err) {
        console.error('error connecting', err.stack);
        return;
    }
    console.log(`connected with id ${db.threadId}`);
});
