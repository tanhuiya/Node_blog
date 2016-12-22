var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check.js').checkNotLogin;

router.get('/',checkNotLogin,function(req,res,next){
 //  res.send(req.flash());
   console.log('sign up');
   res.render('signup');
});

router.post('/',checkNotLogin,function(req,res,next){
   res.send(req.flash());
});

module.exports = router;


