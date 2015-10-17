var express = require('express'),
    app = express();

app.listen(process.env.PORT || 3000, function() {
  console.log('listening at http://localhost:3000');
});