const AWS = require("aws-sdk");

const spacesEndpoint = new AWS.Endpoint(process.env.S3_ENDPOINT);
exports.s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
