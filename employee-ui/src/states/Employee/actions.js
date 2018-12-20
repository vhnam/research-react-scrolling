const axios = require('axios');
const CONST = require('./constants');

export const getEmployees__SUCCESS = data => ({
  type: 'GET_EMPLOYEES_SUCCESS',
  payload: data
});

export const getEmployees__FAILED = data => ({
  type: 'GET_EMPLOYEES_FAILED',
  payload: data
});

export const resetEmployees_RESET = () => ({
  type: 'RESET',
  payload: null
});

export const getEmployees = credentials => {
  return dispatch => {
    return axios
      .get(CONST.BASE_URL, {
        params: credentials
      })
      .then(res => {
        let data = res.data;
        data.credentials = credentials;

        dispatch(getEmployees__SUCCESS(data));
      })
      .catch(err => {
        dispatch(getEmployees__FAILED(err));
        throw err;
      });
  };
};

export const resetEmployees = () => dispatch => {
  return new Promise((resolve) => {
    resolve(dispatch(resetEmployees_RESET()));
  })
}