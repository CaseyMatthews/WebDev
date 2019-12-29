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
import path from 'path';

const server = express();

server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
    console.log("Sent Page!!!")

});

server.get('/favicon.*', (req, res) => {

    res.sendFile(path.join(__dirname + '/favicon.png'));
    console.log("Sent Icon!!!!")
    
});

server.get('/style.css', (req, res) => {

    res.sendFile(path.join(__dirname + '/style.css'));
    
});

server.listen(3000);
