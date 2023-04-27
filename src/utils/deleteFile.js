const { s3 } = require("./s3");

//set delete param bucket name and file name with extension

exports.deleteFile = (fileName) => {
  const param = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
  };

  s3.deleteObject(param, function (err, data) {
    if (err) {
      console.log("err", err);
    }
    console.log("data", data);
  });
};
