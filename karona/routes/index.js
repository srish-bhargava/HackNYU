var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://karona:<password>@cluster0-xiijc.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
});

function closeConnection(){
  client.close();
}


var storingData = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addMovementData', function (req, res) {
  storingData.push(JSON.parse(req.body.data).data);
  console.log(storingData);
  res.status(200).send("Done");
});


module.exports = router;
