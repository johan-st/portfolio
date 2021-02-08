# docker

This project is easily distributed as a single container built according to the __Dockerfile__ in the git repository. This helps ensure consistent behaviour regardless of where it is deployed. 

In no small part because of the plethora of service providers and other deployment options I find that containers significantly simplifies the handling of deployment and helps prevent _"lock-in"_. 

## Dockerfile
```docker
FROM node:8.11.4-alpine

ENV API_KEY=api-key-goes-her
ENV PORT=80

RUN mkdir -p /src && \
   npm install express -g

WORKDIR /src/
ADD ./package.json /src/package.json
ADD ./build /src/build
ADD ./routes /src/routes
ADD ./server.js /src/server.js
RUN npm install

CMD npm run prod
```