var express = require('express');
var app = express();
app.get('/:name', function(req, res) {
  res.send('Hello '+ req.params.name);
});
app.listen(4000);
