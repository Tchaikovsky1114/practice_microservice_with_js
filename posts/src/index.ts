import { Request, Response, RequestHandler } from 'express';


const express = require('express');

const app = express();

const posts = {};


app.get('/posts', (req:Request, res:Response ) => {

});

app.post('/posts', (req:Request, res:Response) => {
  
});


app.listen(4000, () => {
  console.log('Listening on 4000 port');
});