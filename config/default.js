module.exports = {
   port : 3000,
   session : {
      secret : 'myblog',
      key : 'myblog',
      maxAge : 2592000000,
   },
   mongodb: 'mongodb://192.168.2.217:27017/myblog',
};
