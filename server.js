const connection = require('./db/connection')
const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(routes)

app.listen(PORT, () => console.log(`Company API listening at http://localhost:${PORT}`))


// const init = async () => {
    
//     const results = await connection.promise().query(
//         `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
//         (?, ?, ?, ?)`,
//         ['annika', 'crossley', 1, 2]
//     )

//     const company = await connection.promise().query(
//         'SELECT * FROM employee'
//     )

//     console.log(company)
// }

// init()