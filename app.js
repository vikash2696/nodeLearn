var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json());
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');



app.get('/', function(req, res){
    res.send("Hello world!");
});

app.get('/first_template', function(req, res){
    res.render('index', {
      title : 'vikash kumar',
    });
});


app.listen(3000);