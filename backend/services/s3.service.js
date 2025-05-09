require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const uploadReport = async (fileContent, fileName, contentType = 'application/pdf') => {
    const params = {
        Bucket: 'expense-tracker-reports-24',
        Key: fileName,
        Body: fileContent,
        ContentType: contentType
    };

    return s3.upload(params).promise();
};

module.exports = { uploadReport };
