const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const app = express();
var Login = require('./login_schema');

app.use(express.static(path.join(__dirname, '../../build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

mongoose.connect('mongodb://admin:admin@ds121588.mlab.com:21588/react-fitness');

app.get('/loginapi', function(req, res){
 	Login.find(function(err, login){
 		if(err)
 			res.send(err);
 		res.json(login);
 	});
 });