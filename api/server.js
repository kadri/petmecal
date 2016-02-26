var app = module.exports = require('express')();

require('./core/mongoose');
require('./core/express')(app);

var port = process.env.PORT || 8000;

app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Service is running on port: ', port);
    }
});