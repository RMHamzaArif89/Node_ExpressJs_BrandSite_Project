const express=require('express')
const app=express()
const path=require('path')
const hbs=require('express-handlebars')
const port=8000;


app.use(express.static('static'))

app.set('view engine','hbs')

app.set('views',path.join(__dirname,'views'))

app.get('/home',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})





app.listen(port,()=>{
    console.log('port is listening')
})