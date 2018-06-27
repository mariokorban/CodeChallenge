import config from './config';
import apiRouter from './api';
import path from 'path';

import express from 'express';
const server = express(); //creating a server with express

//setting the view engine to be EJS
server.set('view engine','ejs');

//test rendering index.ejs located in ./views and sending content
server.get('/',(req,res) => {
    res.render('index', {
        content: '...'
   });
});

//automatically serve static assets present in public 
server.use(express.static('public'));

//listening to the port used on the console
server.listen(config.port, ()=> {
    console.info('Express listening on port ', config.port);
});