var mongoose = require('mongoose');
mongoose.connect('mongodb://malamute29:CryingWolf29@ds045001.mongolab.com:45001/captinslow');
mongoose.connection.on('open', function () {
    console.log(mongoose.connection.collection);
    mongoose.connection.db.listCollections(function (err, names) {
        console.log(names);
        mongoose.disconnect();
    });
});