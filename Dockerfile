FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer-deps
COPY ./ /app
RUN npm run ng build -- --output-path=./dist/out --verbose