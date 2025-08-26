"use strict";
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const kaamDikhao = async (event) => {

  const client = new DynamoDBClient({});
  const dynamoDb = DynamoDBDocumentClient.from(client);
  let kaam;

  try{
  const result = await dynamoDb.send(new ScanCommand({
    TableName: "KaamKaro"
  }));
  kaam = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(kaam),
    };
};

module.exports = {
    handler: kaamDikhao,
};