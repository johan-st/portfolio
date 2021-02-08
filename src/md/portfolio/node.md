# node & express
This page is served by a very simplistic server. 

I am handling static content with the built-in `express.static()`. All other GET-requests return the html this SPA.

## Server.js
(yep, this is all there is)
```js
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;
const BUILD_DIR = process.env.BUILD_DIR || path.join(__dirname, 'build');

app.use(express.static(BUILD_DIR));

app.get('*', function (req, res) {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Server is listening on port ' + PORT);
});
```