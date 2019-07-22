.EXPORT_ALL_VARIABLES:

IMAGE_NAME ?= cream/cream-services
AWS_SERVICES ?= iam, lambda, dynamodb, apigateway, s3, sns, cloudformation, sts
TEMPDIR ?= ./.tmp

serverless-local:
	echo "Deprecated! use"
	echo "make deploy-to-localstack"

serverless-offline: localstack
	serverless offline start --stage local

deploy-to-localstack:  ## serverless against localstack
	serverless deploy --stage local --verbose

localstack:		   ## run docker compose
	TMPDIR=${TEMPDIR} docker-compose up &

clean: 
	rm -rf .tmp ./data

.default: serverless-offline