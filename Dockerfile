FROM node:6.10
LABEL author="Paul Smout"

WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 4567-4597 8080

# define command at startup
# ENTRYPOINT ["docker-entrypoint.sh"]

ENTRYPOINT '/bin/bash'
