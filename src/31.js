let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
