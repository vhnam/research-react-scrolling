'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    emp_no: { type: DataTypes.INTEGER, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    hire_date: DataTypes.DATE,
    gender: DataTypes.ENUM('M', 'F')
  }, {
    freezeTableName: true,
    tableName: 'employees',
    timestamps: false
  });

  return Employee;
};
