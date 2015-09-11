var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('bar');
});

module.exports = function (port) {
    app.listen(port);
};
