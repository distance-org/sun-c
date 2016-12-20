var express = require('express');
var router = express.Router();

/* GET users listing. */
router.add('/add', function(req, res, next) {
  var a = {
    name : 'gy',
    age : 18
  }
  res.send(a);
});

router.del('/del/id:', function(req, res, next) {

})

router.update('/update/id:', function(req, res, next) {

})




module.exports = router;
