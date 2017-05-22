var express = require('express')
var app = express()

app.use(express.static('./'))
app.get('/', function(req, res){
  res.sendFile('index.html')
})

app.listen(3000, function(){
    console.log("Node.js is listening to PORT:3000");
});
