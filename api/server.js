var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/../web/'));
app.use(bodyParser());
app.listen(8000); 

app.post('/lst', function(req, res){
	res.send('SINAN');
});