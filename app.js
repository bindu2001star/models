//const http = require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("i am in the middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("i am in the another middleware");
    res.send('<h1>hello from expressjs</h1>');
});

//const routes=require('./routes');


//const server=http.createServer(routes);
//const server=http.createServer(app);
app.listen(3000);