var express = require('express');

var PORT = process.env.PORT || 80;
var BUILD_DIR = process.env.BUILD_DIR || './build';

var app = express();

app.use(express.static(BUILD_DIR));

app.listen(PORT, function () {
  console.log('express is listening on http://localhost:' + PORT);
});
