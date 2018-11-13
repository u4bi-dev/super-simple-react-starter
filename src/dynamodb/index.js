import AWS from 'aws-sdk';

AWS.config.update({ 
    region: 'ap-northeast-2'
});

export const call = (action, params) => new AWS.DynamoDB.DocumentClient()[action](params).promise();