var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('foo');
});

module.exports = function (port) {
    return app.listen(port);
};
