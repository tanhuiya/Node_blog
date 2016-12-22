var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check.js').checkLogin;
router.get('/',function(req,res,next){
   res.send(req.flash());
});

router.post('/',checkLogin,function(req,res){
   res.send(req.flash());
});

router.get('/:postid',function(req,res){
   res.send(req.flash());
});

router.post('/:postid/edit',checkLogin,function(req,res){
   res.send(req.flash());
});

router.post('/:postid/comment',checkLogin,function(req,res){
   res.send(req.flash());
});

router.get('/:postid/comment/:commentid',checkLogin,function(req,res,next){
   res.send(req.flash());
});

module.exports = router;


