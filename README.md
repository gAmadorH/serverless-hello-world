# serverless-hello-world

[![dependencies status](https://david-dm.org/gAmadorH/serverless-hello-world.svg)](https://david-dm.org/gAmadorH/serverless-hello-world)
[![dev dependencies status](https://david-dm.org/gAmadorH/serverless-hello-world/dev-status.svg)](https://david-dm.org/gAmadorH/serverless-hello-world#info=devDependencies)
[![license](https://img.shields.io/github/license/gAmadorH/serverless-hello-world.svg?color=blue)](https://github.com/gAmadorH/serverless-hello-world/blob/master/LICENSE)
[![code style](https://img.shields.io/badge/code_style-eslint-blueviolet.svg)](https://eslint.org/)
[![style guide](https://img.shields.io/badge/style_guide-airbnb-ff69b4.svg)](https://github.com/airbnb/javascript)

Hello World application with Serverless Framework.

## requirements

- [NodeJS v12.18.3+](https://nodejs.org/en/) or [nvm v0.37.0+](https://github.com/nvm-sh/nvm/releases/tag/v0.37.0)
- [AWS Account](https://aws.amazon.com/)
  - Access Key Id (key)
  - Secret Access Key (secret)

## Install serverless framework

Install globally `serverless framework` using npm:

```bash
npm i -g serverless
```

Now you can use it with `serverless` or `sls` command in your terminal.

## Config serverless framework credentials

Config serverless framework credentials (AWS as provider):

```bash
sls config credentials \
  --provider aws \
  --key your-aws-key \
  --secret your-aws-secret
```

This command has configured the AWS credentials in the `default profile`.  
You can use the `--profile` flag to specific a profile.
`development` profile for example:

```bash
sls config credentials \
  --provider aws \
  --profile development \
  --key your-aws-key \
  --secret your-aws-secret
```

## Create a project boilerplate

Create a project directory and use a template:

```bash
mkdir serverless-test && cd $_
sls create --template aws-nodejs --name serverless-test
```

It has created 2 files, `serverless.yml` and h`handler.js`  
the last file has a hello function, it does not a trigger event associated  
then we have to add it, we are going yo use a http event,  
so add this (in the `hello` function in the `serverless.yml` file):

```yml
events:
  - http:
      method: get
      path: /hello
```

The files should look like this:

```yml
service: serverless-test

frameworkVersion: "2"

provider:
  name: aws
  runtime: nodejs12.x
  lambdaHashingVersion: 20201221

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          method: get
          path: /hello
```

## Deploy your project

To deploy your new function run (using default profile):

```bash
sls deploy
```

If you want to use other profile, you can specify using `--aws-profile` option:

```bash
sls deploy --aws-profile development
```

When you execute the command, information about your service appears in your terminal,
look for `endpoints:` key, it looks something like this:

```bash
endpoints:
  GET - https://something.execute-api.us-east-1.amazonaws.com/dev/hello
```

Now you can hit in the API endpoint:

```bash
curl https://something.execute-api.us-east-1.amazonaws.com/dev/hello
```

## Watch logs

To watch logs run:

```bash
sls logs -t -f hello
# or
sls logs --tail --function hello
```

The function name is defined in the `serverless.yml`:

```yml
functions:
  hello: # this is the function name
    handler: handler.hello
```

## Destroy

To destroy the infrastructure created by serverless framework run:

```bash
sls remove
```

## License

[MIT.](./LICENSE) Copyright (c)
