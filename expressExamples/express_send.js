var express = require('express');
var app = express();
var url = require('url');
app.listen(8080);
app.get('/', function (req, res) {
    var response = '<html><head><title>Simple Send </title></head>' +
        '<body><h1>Hello from Express</h1></body></html>';
    res.status(200);
    res.set({
        'Content-Type': 'text/html',
        'Content-Length': response.length
    });
    res.send(response);
    console.log('Response Finsihed? ' + res.finished);
    console.log('\nHeaders Sent: ');
    console.log(res.headerSent);


});

app.get('/error', function (req, res) {
    res.status(400);
    res.send("This is a bad request.");
});
