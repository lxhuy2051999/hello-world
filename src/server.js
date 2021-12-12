const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({});

const uri = "mongodb+srv://huy:<password>@cluster0.bkdtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
  
app.get('/', (req, res) => {
  // proxy.web(req, res, { target: 'http://localhost:3000/' });
  // res.end('Hello World!');
  // res.redirect('http://localhost:3000/');
  res.send('<a href="http://localhost:3000/">Click here to go to the HELLO WORLD page</a>');
});
  
const PORT =  8000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));