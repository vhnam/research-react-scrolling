import { Employee } from '../models';

const sequelize = require('sequelize');
const config = require('../config');

function filter(query) {
  let condition = [];

  if (undefined !== query.first_name) {
    condition.push({
      first_name: {
        $like: `%${query.first_name}%`
      }
    });
  }

  if (undefined !== query.last_name) {
    condition.push({
      last_name: {
        $like: `%${query.last_name}%`
      }
    });
  }

  if (undefined !== query.gender) {
    condition.push({
      gender: query.gender
    });
  }

  if (undefined !== query.hiring_year) {
    condition.push(
      sequelize.where(
        sequelize.fn('YEAR', sequelize.col('hire_date')),
        query.hiring_year
      )
    );
  }

  return condition;
}

module.exports = {
  getEmployees: async query => {
    return new Promise((resolve, reject) => {
      let offset = 0;
      const limit = parseInt(config.API_LIMIT);
      const condition = filter(query);

      Employee.count({
        where: {
          $and: condition
        }
      })
        .then(pagination => {
          const pages = Math.ceil(pagination / limit);
          offset = limit * (query.page - 1);

          return Employee.findAll({
            where: {
              $and: condition
            },
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
