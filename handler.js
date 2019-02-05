'use strict';
const axios = require('axios');

const FLIGHTS_ENDPOINT = 'https://api.skypicker.com/flights'

module.exports.search = async (event, context) => {
  const request_endpoint = `${FLIGHTS_ENDPOINT}?flyFrom=CNF&to=SYD&dateFrom=6/2/2019&dateTo=20/2/2019`
  const response = await axios.get(request_endpoint);
  return response.data;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
