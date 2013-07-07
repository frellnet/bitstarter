var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

fs.readFileSync('index.html', function (data){
  line = buf.toString();
  response.send(line);
}); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
