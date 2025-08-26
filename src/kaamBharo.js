"use strict";
const { v4 } = require("uuid");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const kaamBharo = async (event) => {

  const client = new DynamoDBClient({});
  const dynamoDb = DynamoDBDocumentClient.from(client);

  const { kaam } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newKaam = {
    id,
    kaam,
    createdAt,
    completed: false
  }
  await dynamoDb.send(new PutCommand({
    TableName: "KaamKaro",
    Item: newKaam
  }));

  return {
    statusCode: 200,
    body: JSON.stringify(newKaam),
    };
};

module.exports = {
    handler: kaamBharo,
};