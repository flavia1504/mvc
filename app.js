const express = require('express');
const app = express();
const port = 3000;


const mainRouter = require('./router/main');

app.use('/', mainRouter);

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });