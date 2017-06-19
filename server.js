"use strict"

const express = require('express')
const patch = require('path')
const app = express()

// middleware to define folder for static files
app.use(express.static('public'))
app.get('/', function(res, req){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(3000, function() {
    console.log('app is on port 3000')
})

