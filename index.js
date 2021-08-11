var express = require('express');
var app = express();
const helmet = require('helmet');

var fs = require('fs');
app.use(helmet());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use('/', require('./routes/main'));
app.disable('x-powered-by');
var port = 3000;
app.listen(port, function() {
    console.log('server on ! http://localhost:' + port);
})
