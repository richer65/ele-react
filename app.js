var express = require('express');
var path = require('path')
var app = express();
app.set('views','./dist');

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');


app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
  res.render('index');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});