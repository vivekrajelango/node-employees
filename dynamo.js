const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "employee-api";

const getEmployees = async()=>{
    const params = {
        TableName: TABLE_NAME
    }
    const employees = await dynamoClient.scan(params).promise();
    console.log('xx', employees)
    return employees;
}

const addOrUpdateEmployee = async(employee)=>{ 
    const params = {
        TableName: TABLE_NAME,
        Item: employee
    }
    return await dynamoClient.put(params).promise();
}

module.exports = {
    getEmployees,
    addOrUpdateEmployee
}

//getEmployees();
// addOrRemoveEmployee(employee);