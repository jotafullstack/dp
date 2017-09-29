var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('css'));
app.use(express.static('fotos'));
app.use(express.static('img'));
app.use(express.static('js'));
app.use(express.static('lib'));

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/fotos', express.static(path.join(__dirname, 'fotos')))
app.use('/img', express.static(path.join(__dirname, 'img')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/lib', express.static(path.join(__dirname, 'lib')))

//app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
