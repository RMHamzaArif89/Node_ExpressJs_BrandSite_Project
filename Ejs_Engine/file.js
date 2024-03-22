const express=require('express')
const app=express()
const path=require('path')
const port=5000;
const ejs = require('ejs')


 
  
  app.set('view engine', 'ejs');
app.set('views','views')
  

app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/file',(req,res)=>{
    res.send('file')
})





app.listen(port,()=>{
    console.log('port is listening')
})