const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Teague50!',
    database: 'company_db'
});

const init = async () => {
    
    const results = await connection.promise().query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
        ('annika', 'crossley', 1, 4)`,
    )

    const company = await connection.promise().query(
        'SELECT * FROM employee'
    )

    console.log(company)
}

init()