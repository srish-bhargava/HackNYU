var express = require('express');
var router = express.Router();

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
