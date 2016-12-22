var express = require('express');
var route = express.Router();

route.get('/:name',function(req,res){
   res.render('users',{
      name : req.params.name,
   });
});

module.exports = route;
