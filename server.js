const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Teague50!',
    database: 'company_db'
});

console.log(connection)