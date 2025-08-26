"use strict";
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const kaamKhatamkaro = async (event) => {

  const client = new DynamoDBClient({});
  const dynamoDb = DynamoDBDocumentClient.from(client);

  const { completed } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  await dynamoDb.send(new UpdateCommand({
    TableName: "KaamKaro",
    Key: { id },
    UpdateExpression: "set completed = :completed",
    ExpressionAttributeValues: {":completed": completed},
    ReturnValues: "ALL_NEW"
  }));

  return {
    statusCode: 200,
    body: JSON.stringify({msg:"Kaam Khatam Kar Diya"}),
    };
};

module.exports = {
    handler: kaamKhatamkaro,
};