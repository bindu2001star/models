//const http = require('http');
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
//app.use((req,res,next)=>{
//    console.log("i am in the middleware");
//    next();
//})
app.use(bodyparser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    //console.log("i am in the another123middleware");
    //res.send('<h1>hello from expressjs</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type ="submit">add product</button></form>');
    
});
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    console.log("i am in the another middleware");
    //res.send('<h1>hello from expressjs</h1>');
    res.send( "hello form expressjs");
});

//const routes=require('./routes');


//const server=http.createServer(routes);
//const server=http.createServer(app);
app.listen(3000);