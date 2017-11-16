var express = require('express');
var app = express();

var PORT = 5000;

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'html');


app.get('/', function(req, res){
	res.sendFile('index.html', { root:__dirname});
});

app.listen(PORT, function(){
	console.log("listen to 3000");
});