/**
 *
 * Created by Malamute on 8/13/15.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://malamute29:CryingWolf29@ds045001.mongolab.com:45001/captinslow');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function () {
   var newWord = Words({
        word: 'unhappy',
        first: 'g', last: 'n', size: 12,
        letters: ['g', 'r','a','t','i','f','c','o','n'],
        stats: {vowels: 5, consonants: 7}
    });
    console.log("Made it to save function:\t", newWord.isNew);

    newWord.save(function (err, result) {
            console.log(result);
        mongoose.disconnect();
    });
});

