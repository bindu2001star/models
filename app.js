const path=require('path');
const express1=require('express');
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
const contactus=require('./routes/contact');
const sucess=require('./routes/succes')
const bodyparser=require('body-parser');
const app=express1();

app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminroute);
app.use('/shop',shoproute);
app.use(contactus);
app.use(sucess);
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});




app.listen(3000);