/**
 * Created by Malamute on 8/13/15.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://malamute29:CryingWolf29@ds045001.mongolab.com:45001/captinslow');
var wordSchema = require('./word_schema').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function () {
    var query = Words.findOne().where('word', 'gratifaction');
    query.exec(function (err, doc) {

        console.log("Before update: ");
        console.log(doc.toString());
        var query = doc.update(
            {
                $set: {word: 'gratifications', size: 13, last: 's'},
                $push: {letters: 's'}
            });
        query.exec(function (err, results) {
            if(err){console.error(err);}

            console.log("\n%d Documents updated", results);
            Words.findOne({word: 'gratifications'}, function (err, doc) {
                console.log('\nAfter Update');
                console.log(doc.toString());
                mongoose.disconnect();
            });
        });
    });
});