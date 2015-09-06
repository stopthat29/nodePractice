/*
 * Created by Malamute on 8/23/15.
 */

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://malamute29:CryingWolf29@ds045001.mongolab.com:45001/captinslow');
var wordSchema = require('./word_schema').wordSchema;
var Words = mongoose.model('Words', wordSchema);
Words.schema.path('word').validate(function (value) {
    return value.length > 0;
}, "Word is too small");
Words.schema.path('word').validate(function (value) {
    return value.length < 20;
}, "Word is Too Big");

mongoose.connection.once('open', function () {
    var newWord = new Words({
        word: 'supercalifragilisticexpialidocious',
        first: 's',
        last: 's',
        size: 'supercalifragilisticexpialidocious'.length
    });
    newWord.save(function (err) {
        console.log(err.errors.word.message);
        console.log(String(err.errors.word));
        console.log(err.errors.word.type);
        console.log(err.errors.word.path);
        console.log(err.errors.word.value);
        console.log(err.name);
        console.log(err.message);
        mongoose.disconnect();

    });
});
