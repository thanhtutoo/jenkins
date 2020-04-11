var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlds!! Test Okss");
});

app.listen(3000);