var express = require('express');
var app = express();

var hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static( __dirname+ '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view wngine', hbs);



app.get('/', function (req, res) {
  res.render('home.hbs', {
  	nombre: 'Ingrhy'
  })
})

app.get('/about', function (req, res) {
  res.render('about.hbs');
})

 
app.listen(3000, () =>{
	console.log('puerto 3000');
})