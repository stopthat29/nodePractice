/**
 * Created by Malamute on 8/23/15.
 */
var express = require('express');
var url = require('url');
var app = express();
app.listen(8080);

app.get('/json', function (req, res) {
    app.set('json spaces', 4);
    res.json({
        name: "Smithsonian", built: '1846', items: '137M',
        centres: ['art', 'astrophysics', 'natural history', 'planetary', 'biology', 'space', 'zoo']
    });
});
app.get('/error', function (req, res) {
    res.json(500, {status: false, Message: "Internal Server Error!!!"});

});

app.get('/jsonp', function (req, res) {
    app.set('jsonp callback name', 'cb');
    res.jsonp({
        name: "Smithsonian", built: '1846', items: '137M',
        centres: ['art', 'astrophysics', 'natural history', 'planetary', 'biology', 'space', 'zoo']
    });
});