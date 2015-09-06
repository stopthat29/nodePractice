/**
 *
 * Created by Malamute on 8/13/15.
 */

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://malamute29:CryingWolf29@ds045001.mongolab.com:45001/captinslow');
var wordSchema = require('./word_schema').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function () {
    var query = Words.findOne().where('word','unhappy');
    query.exec(function (err, doc) {
        console.log("Before Delete: ");
        console.log(doc);
        doc.remove(function (err, deletedDoc) {
            Words.findOne({word: 'unhappy'}, function (err, doc) {
                console.log("\nAfter Delete:");
                console.log(doc);
                mongoose.disconnect();
            });
        });

    });
});


