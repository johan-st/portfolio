# docker

This project is easily distributed as a single container built according to the __Dockerfile__ in the git repository. This helps ensure consistent behaviour regardless of where it is deployed. 

In no small part because of the plethora of service providers and other deployment options I find that containers significantly simplifies the handling of deployment and helps prevent _"lock-in"_. 

## Dockerfile
```docker
FROM node:15.7.0-alpine3.10

WORKDIR /app
COPY ./package*.json /app/
RUN  npm ci 

COPY ./build /app/build
COPY ./server.js /app/server.js

ENV BUILD_DIR /app/build/

CMD [ "node","server.js" ]
```