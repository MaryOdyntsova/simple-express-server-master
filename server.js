var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// mock data
var ingredients = [
    { "id": "01", "text": "Eggs"},
    { "id": "02", "text": "Milk"},
    { "id": "03", "text": "Orange"},
    { "id": "04", "text": "Bananas"},
    { "id": "05", "text": "Kiwi"}];


app.get('/ingredients', function(req, res) {
  console.log("GET From SERVER");
  res.send(ingredients);
})

app.post('/ingredients', function(req,res) {
  var ingredient = req.body;
  console.log(req.body);
  ingredients.push(ingredient);
  res.status('200').send("Successfully posted ingreient");
})

app.listen(6060);
