FROM node:alpine

RUN apk add bash

ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install

COPY . /usr/src/app

RUN yarn run build

EXPOSE 3000
