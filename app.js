var express = require('express'),
    compression = require('compression'),
    path = require('path'),
    ejs = require('ejs'),
    layouts = require('express-ejs-layouts');

ejs.open = '{{';
ejs.close = '}}';

var app = express(),
    port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(compression());

app.get('/', function (req, res) {
	res.render('demo');
});

app.get('/demo2', function (req, res) {
	res.render('demo2');
});

var server = app.listen(port, function () {
    console.log('DLS demo launched http://%s:%s', server.address().address, server.address().port);
});