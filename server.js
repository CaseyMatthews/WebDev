//import http from 'http';

//const server = http.createServer();

// events
//server.on('request', (req, res) => {
//
//    console.log('Request:', req.url);
//
//    if (req.url == '/favicon.ico') {
//
//        res.write('');
//
//    } else {
//
//        res.write('Hello HTTP');
//
//    }
//
//    res.end();
//
//});
//
//server.listen(3000);

import express from 'express';

const server = express();

server.get('/', (req, res) => {

    res.send({message: 'Hello Express'});

});

server.get('/favicon.*', (req, res) => {

    res.sendFile('/path/to/icon');
    
});

server.listen(3000);
