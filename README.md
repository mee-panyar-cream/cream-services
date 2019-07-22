# Cream Services Project

This project defines the backend services for the CREAM project.

## Running With Redis in Docker

Note serverless will check if you have any AWS credentials before it runs. 
If you don't have any, set some dummy ones like this:

serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY


Scripts are provided to run the docker commands for you.

```bash
make serverless-offline # runs serverless locally with redis and or localstack in docker
```

At this point your lambda functions are still run by serverless because that has hot reload.

# Manual test functions

Use this postman collection to write/read device readings

[Postman Collection](https://github.com/mee-panyar-cream/cream-services/files/3418485/CREAM-services.postman_collection.json.zip)



If you want to try deploying your lambda functions to localstack, then you can try this experimental target

```
make deploy-to-localstack # ensure localstack is available in the docker-compose.yml
```

Then you view your deployed functions
```
awslocal lambda list-functions
```
However running functions this way has not yet been solved. 

## Create Required AWS resources in Localstack
You can install awscli-local which wraps the real aws cli but sets the server address to localhost.

```bash
pip install awscli-local
```

### Create S3 bucket
maybe!

awslocal s3api create-bucket --bucket ServerlessDeploymentBucket

### Localstack console is here
http://localhost:8080


### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

Install Node.js
https://nodejs.org/en/download/

Install serverless
``` bash
npm install -g serverless
```

Clone current project
``` bash
git clone git@github.com:mee-panyar-cream/cream-services.git
```

Open project and install Node.js packages
``` bash
cd cream-services
npm install
```

### Usage

To run unit tests on your local

``` bash
$ npm test
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

You can then test locally with the following postman collection:

For **create**: [CREAM-services.postman_collection.json.zip](https://github.com/mee-panyar-cream/cream-services/files/3346839/CREAM-services.postman_collection.json.zip)

For **latest**: GET localhost:3000/meter/latest

Run your tests

``` bash
$ npm test
```

We may use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

Deploy your project 

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function create
```

To add another function as a new file to your project, simply add the new file and add the reference to `serverless.yml`. The `webpack.config.js` automatically handles functions in different files.

To add environment variables to your project

1. Rename `env.example` to `env.yml`.
2. Add environment variables for the various stages to `env.yml`.
3. Uncomment `environment: ${file(env.yml):${self:provider.stage}}` in the `serverless.yml`.


