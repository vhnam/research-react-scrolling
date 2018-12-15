const logger = require('winston');

const employeeService = require('../../services/employee');

module.exports = {
  getEmployees: async (req, res) => {
    try {
      const query = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        gender: req.query.gender,
        hiring_year: req.query.hiring_year,
        page: (req.query.page) ? req.query.page : 1
      };

      const employees = await employeeService.getEmployees(query);

      res.status(200).json(employees);
    } catch (err) {
      console.log(err.stack);
      logger.error(`[ServiceController] ${err}`);
      res.status(400).json({ message: err.message });
    }
  }
};
