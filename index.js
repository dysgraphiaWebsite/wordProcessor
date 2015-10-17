var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/searchWord', function(req, res) {
  console.log('got req', req.body);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
