const express=require('express')
const app=express()
const path=require('path')
const hbs=require('express-handlebars')
const port=8000;


app.use('/static',express.static('static'))

app.set('view engine','hbs')

app.set('views',path.join(__dirname,'views'))

app.get('/home',(req,res)=>{
    res.send('homefile')
})
app.get('/file',(req,res)=>{
    res.render('file')
})





app.listen(port,()=>{
    console.log('port is listening')
})