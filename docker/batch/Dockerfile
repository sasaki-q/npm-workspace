FROM --platform=linux/x86_64 node:16-alpine3.15 AS builder

WORKDIR /app

RUN apk update && \
    npm i -g npm@7.18.1

COPY ./*.json ./
COPY ./packages/batch/ ./packages/batch/
COPY ./packages/domains/src/ ./packages/domains/src

RUN npm ci

CMD [ "npm", "run", "run:migration" ]