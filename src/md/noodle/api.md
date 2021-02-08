# Hidden keys and cors

I use [unsplash](https://unsplash.com/) to provide the images for my image gallery. Requests to the api go to the same server that hosts the spa where the appropriate headers are attatched before delivering the request to unsplash. This solves two potential problems.
 1. The API-key is never visible to the client. In fact it is stored as an enviorment variable on the server.

 2. All trafic to and from the comes from and goes to the same origin, eliminating any need for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).