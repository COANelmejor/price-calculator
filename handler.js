'use strict';

const moment = require('moment');
const datos = require('./data');

module.exports.hello = async event => {
  const ahora = moment().locale('es').utcOffset(-6).format('LLL');

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola, La hora actual es ${ahora}.`,
        data: datos,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
