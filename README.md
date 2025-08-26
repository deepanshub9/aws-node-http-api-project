<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework v3.

## Features

- **Node.js 20.x** runtime
- **AWS SDK v3** for better performance and smaller bundle size
- **DynamoDB** integration for task management
- **HTTP API** endpoints for CRUD operations
- **UUID v10** for unique ID generation

## Prerequisites

- Node.js 18+ installed
- AWS CLI configured with appropriate credentials
- Serverless Framework CLI installed: `npm install -g serverless`

## Installation

```bash
npm install
```

## API Endpoints

- `GET /` - Hello message
- `POST /kaam` - Create a new task
- `GET /kaam` - Get all tasks
- `PUT /kaam/{id}` - Update task completion status

## Deployment

### Option 1: Deploy to AWS directly

```bash
serverless deploy
```

### Option 2: Deploy via Serverless.com Dashboard

<img width="1918" height="893" alt="Image" src="https://github.com/user-attachments/assets/f57b1919-57e1-494f-8b16-800594884314" />

1. **Sign up/Login** to [serverless.com](https://serverless.com)
2. **Connect your repository** to Serverless Dashboard
3. **Set up deployment**:
   ```bash
   serverless login
   serverless deploy
   ```
4. **Monitor and manage** your functions through the dashboard

### Option 3: CI/CD with Serverless.com

1. **Connect GitHub/GitLab** repository to Serverless Dashboard
2. **Configure environment variables** in dashboard
3. **Enable automatic deployments** on push to main branch
4. **Set up monitoring and alerts**

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoints:
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
  POST - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/kaam
  GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/kaam
  PUT - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/kaam/{id}
functions:
  hello: aws-node-http-api-project-dev-hello
  kaamBharo: aws-node-http-api-project-dev-kaamBharo
  kaamDikhao: aws-node-http-api-project-dev-kaamDikhao
  kaamKhatamKaro: aws-node-http-api-project-dev-kaamKhatamKaro
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Testing the API

<img width="932" height="808" alt="Image" src="https://github.com/user-attachments/assets/3153fde7-2c1c-42c4-89fe-9aadd3447481" />

**Get hello message:**

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

**Create a task:**

```bash
curl -X POST https://xxxxxxx.execute-api.us-east-1.amazonaws.com/kaam \
  -H "Content-Type: application/json" \
  -d '{"kaam": "Complete the project"}'
```

**Get all tasks:**

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/kaam
```

**Update task:**

```bash
curl -X PUT https://xxxxxxx.execute-api.us-east-1.amazonaws.com/kaam/{task-id} \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

## Local Development

**Install serverless-offline plugin:**

```bash
serverless plugin install -n serverless-offline
```

**Start local development server:**

```bash
serverless offline
```

**Test functions locally:**

```bash
serverless invoke local --function hello
serverless invoke local --function kaamDikhao
```

## Dependencies

- `@aws-sdk/client-dynamodb`: ^3.658.1
- `@aws-sdk/lib-dynamodb`: ^3.658.1
- `uuid`: ^10.0.0

## Serverless.com Dashboard Benefits

<img width="1918" height="893" alt="Image" src="https://github.com/user-attachments/assets/f57b1919-57e1-494f-8b16-800594884314" />

- **Real-time monitoring** and metrics
- **Error tracking** and alerting
- **CI/CD integration** with GitHub/GitLab
- **Environment management**
- **Team collaboration** features
- **Cost optimization** insights

## Architecture

- **Runtime**: Node.js 20.x
- **Database**: DynamoDB (Pay-per-request)
- **API**: HTTP API (API Gateway v2)
- **Functions**: 4 Lambda functions
- **Region**: us-east-1
