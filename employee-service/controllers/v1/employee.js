const logger = require('winston');

const employeeService = require('../../services/employee');

module.exports = {
  getEmployees: async (req, res) => {
    try {
      const query = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        gender: req.query.gender,
        page: (req.query.page) ? req.query.page : 1
      };

      const employees = await employeeService.getEmployees(query);

      res.status(200).json(employees);
    } catch (err) {
      logger.error(`[ServiceController] ${err}`);
      res.status(400).json({ message: err.message });
    }
  }
};
