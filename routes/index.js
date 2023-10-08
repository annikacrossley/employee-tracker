const router = require('express').Router()

const departmentRoutes = require('./department')
const empRoleRoutes = require('./emp_role')
const employeeRoutes = require('./employee')

router.use('/api/department', departmentRoutes)
router.use('/api/emp_role', empRoleRoutes)
router.use('/api/employee', employeeRoutes)

module.exports = router