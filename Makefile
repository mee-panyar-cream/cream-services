.EXPORT_ALL_VARIABLES:

IMAGE_NAME ?= cream/cream-services
AWS_SERVICES ?= iam, lambda, dynamodb, apigateway, s3, sns
TEMPDIR ?= /private${TMPDIR}

docker-build:      ## Build Docker image
	docker build -t $(IMAGE_NAME) .

run-local:		   ## run docker compose
	TMPDIR=${TEMPDIR} docker-compose up

.default: docker-build run-local