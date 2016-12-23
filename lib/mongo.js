'use strict';
var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass(config.mongodb);
// mongolass.connect(config.mongodb);

var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

mongolass.plugin('addCreatedAt',{
   afterFind: function (results) {
       results.forEach(function (item) {
            item.create_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
       })
       return results;
   },
    afterFindOne: function (result) {
        if (result){
            result.create_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
        }
    }
});

exports.User = mongolass.model('User',{
    name: {type: 'string'},
    password: {type: 'string'},
    avatar: {type: 'string'},
    gender: {type: 'string',enum :['m','f','x']},
    bio: {type: 'string'}
});
exports.User.index({name:1},{unique: true}).exec();