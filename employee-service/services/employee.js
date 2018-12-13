import { Employee } from '../models';

const config = require('../config');

module.exports = {
  getEmployees: async query => {
    return new Promise((resolve, reject) => {
      const limit = parseInt(config.API_LIMIT);
      let offset = 0;

      Employee.count().then(pagination => {
        const pages = Math.ceil(pagination / limit);
        offset = limit * (query.page - 1);

        Employee.findAll({
          limit: limit,
          offset: offset
        })
        .then(employees => {
          resolve({
            data: employees,
            total: pagination,
            per_page: limit,
            last_page: pages,
            current_page: query.page
          });
        })
        .catch(err => {
          reject(err);
        });
      })
      .catch(err => {
        reject(err);
      });
    });
  }
};
