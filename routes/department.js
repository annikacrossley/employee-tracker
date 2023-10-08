const router = require('express').Router()
const connection = require('../db/connection')

//CRUD
router.post('/', async (req, res) => {
    const {dept_name} = req.body

    try {
        const result = await connection.promise().query(
            'INSERT INTO department (dept_name) VALUES (?);'
            [dept_name]
        )
    
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await connection.promise().query(
            'SELECT * FROM department;'
        )
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const result = await connection.promise().query(
            'SELECT * FROM department WHERE id=?;',
            id,
        )
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const {dept_name} = req.body

    try {
        const result = await connection.promise().query(
            `UPDATE department
            dept_name = ?
            WHERE id = ?`,
            [dept_name, id]
        )
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await connection.promise().query(
            `DELETE FROM department WHERE id = ?`,
            id,
        )
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router