var path = require('path')
var express = require('express')
var app = express()

app.use(express.static('./'))

app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.get('/1', function(req, res){
  res.sendFile(path.resolve(__dirname, 'sessionTest', 'index1.html'))
})

app.get('/2', function(req, res){
  res.sendFile(path.resolve(__dirname, 'sessionTest', 'index2.html'))
})

app.listen(3000, function(){
    console.log("Node.js is listening to PORT:3000");
});
