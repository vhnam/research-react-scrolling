import { Employee } from '../models';

const config = require('../config');

module.exports = {
  getEmployees: async query => {
    return new Promise((resolve, reject) => {
      const limit = parseInt(config.API_LIMIT);
      let offset = 0;
      let condition = {};

      if (undefined !== query.first_name) {
        condition.first_name = {
          $like: `%${query.first_name}%`
        };
      }

      if (undefined !== query.last_name) {
        condition.last_name = {
          $like: `%${query.last_name}%`
        };
      }

      if (undefined !== query.gender_name) {
        condition.gender_name = query.gender;
      }

      Employee.count({
        where: condition
      })
      .then(pagination => {
        const pages = Math.ceil(pagination / limit);
        offset = limit * (query.page - 1);

        Employee.findAll({
          where: condition,
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
