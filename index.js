const express = require('express');
require('dotenv').config();
const app= express();
const port=3050;

app.get('/',(req,res)=>{
    res.send('server is started');
})

app.get('/f',(req,res)=>{
     res.send('this is the facebook .com by aditya shukla');
});

app.get('/git',(req,res)=>{
     res.sendStatus(500);
})

app.get('/h1',(req,res)=>{
    res.send('<h1>my name is aditya shukla </h1>');
})

app.listen( process.env.PORT,()=>{
    console.log(`Hello world is started on ${port}`);
})