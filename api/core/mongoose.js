var mongoose = require("mongoose")
    , fs = require("fs")
    , models_path = process.cwd() + '/api/model';
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/petmecal");

var db = mongoose.connection;

db.on('error', function (err) {
    console.error('MongoDB connection error:', err);
});

db.once('open', function callback() {
    console.info('MongoDB connection is established');
});

fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js'))
        require(models_path + '/' + file)
});