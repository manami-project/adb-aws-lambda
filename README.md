# adb-aws-lambda
Stands for _anime database AWS lambda_. It lets you create an anime meta data REST service using an AWS lambda based on the [anime-offline-database](https://github.com/manami-project/anime-offline-database) with just one command.

# Prerequisite
* AWS account
* node.js installed
  * npm installed
  * serverless installed
* linux or MacOS

Provide your AWS credentials in `~/.aws/credentials` as follows:
```
[adbAwsLambda]
aws_access_key_id=YOUR-KEY-ID-HERE
aws_secret_access_key=YOUR-SECRET-ACCESS-KEY
region=YOUR-REGION-HERE
```

# Usage
## Deploy
1. Put your region in `serverless.yaml`
2. Execute `sh start.sh`

## Tear down
1. Execute `sh teardown.sh`