FROM node:15.7.0-alpine3.10

WORKDIR /app
COPY ./package*.json /app/
RUN  npm ci 

COPY ./build /app/build
COPY ./server.js /app/server.js

ENV BUILD_DIR /app/build/

CMD [ "node","server.js" ]