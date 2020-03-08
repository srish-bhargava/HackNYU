var os = require('os');

var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://karona:" + process.env.MONGO_DB_PASSWORD + "@cluster0-xiijc.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connected");
});

function closeConnection(){
  client.close();
}


var storingData = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testmyface', function(req, res, next) {
  res.status(200).send("Testing your face");
});

router.post('/addMovementData', function (req, res) {
  client.db("karona").collection('training').insert(req.body, function(err, result) {
    if(err){
      res.status(200).send(JSON.stringify(err));
    }else{
      console.log("Adding training data point");
    }
  });
  res.status(200).send("Done");
});


module.exports = router;
