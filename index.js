const express = require('express');
const app = express();
const path = require('path');
const songs = require('./app.js')


app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.get('/cds', function (req, res, next) {
    res.sendFile(path.join(__dirname,'./cds.html'))
})

app.get('/albums/:i', function (req, res, next) {
    const {i} = req.params;
    res.send(songs[i])
})

app.listen (3001, function(){
    console.log("the server is listening...")
})