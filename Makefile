.EXPORT_ALL_VARIABLES:

IMAGE_NAME ?= cream/cream-services
AWS_SERVICES ?= iam, lambda, dynamodb, apigateway, s3, sns, cloudformation, sts
TEMPDIR ?= ./.tmp

serverless-local:  ## serverless against localstack
	serverless deploy --stage local --verbose

localstack:		   ## run docker compose
	TMPDIR=${TEMPDIR} docker-compose up

.default: localstack