# Cream Services Project

This project defines the backend services for the CREAM project.

## Running With Localstack in Docker

Note serverless will check if you have any AWS credentials before it runs. 
If you don't have any, set some dummy ones like this:

serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY


Scripts are provided to run the docker commands for you.

```bash
make localstack # runs localstack inside docker

# Then in another window.

make serverless-local # runs serverless locally using localstack
```

At this point you view your deployed functions like this:

```
awslocal lambda list-functions
```

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

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

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
4. Make sure to not commit your `env.yml`.



## General about the Serverless Framework

### Support 

- Send us an [email](mailto:contact@anoma.ly) if you have any questions
- Open a [new issue](https://github.com/AnomalyInnovations/serverless-nodejs-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!

### Maintainers

Serverless Node.js Starter is maintained by Frank Wang ([@fanjiewang](https://twitter.com/fanjiewang)) & Jay V ([@jayair](https://twitter.com/jayair)). [**Subscribe to our newsletter**](http://eepurl.com/cEaBlf) for updates. Send us an [email](mailto:contact@anoma.ly) if you have any questions.



A Serverless starter that adds ES7 syntax, serverless-offline, environment variables, and unit test support. Part of the [Serverless Stack](http://serverless-stack.com) guide.

[Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, [Babel](https://babeljs.io), [serverless-offline](https://github.com/dherault/serverless-offline), and [Jest](https://facebook.github.io/jest/). It supports:

- **ES7 syntax in your handler functions**
  - Use `import` and `export`
- **Package your functions using Webpack**
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`
- **Add environment variables for your stages**

------

### Demo

A demo version of this service is hosted on AWS - [`https://z6pv80ao4l.execute-api.us-east-1.amazonaws.com/dev/hello`](https://z6pv80ao4l.execute-api.us-east-1.amazonaws.com/dev/hello)

And here is the ES7 source behind it

```javascript
export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      input: event,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
```

