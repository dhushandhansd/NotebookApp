const serverless = require("serverless-http");
const serverlessAWS = require("aws-serverless-express");
const app = require('./src/index')

const server = serverlessAWS.createServer(app)

exports.handler = (event, context) => {
  return serverlessAWS.proxy(server, event, context);
}

// module.exports.handler = serverless(app);
