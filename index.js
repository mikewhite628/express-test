const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname+'/contact-me.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/404.html'))
})
app.listen(port, () => {
    console.log(`Example app listing on port: ${port}`)
});