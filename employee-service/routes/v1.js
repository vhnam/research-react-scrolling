const express = require("express");
const router = express.Router();

const employeeController = require('../controllers/v1/employee');

router.get('/employees', employeeController.getEmployees);

module.exports = router;
