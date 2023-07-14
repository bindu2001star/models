const path=require('path');
const express1=require('express');
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
const contactus=require('./routes/contact');
const sucess=require('./routes/succes')
const bodyparser=require('body-parser');
const pageerror=require('./controllers/error');
const app=express1();

app.use(bodyparser.urlencoded({extended:false}));
app.use('/admin',adminroute);
app.use('/shop',shoproute);
app.use(contactus);
app.use(sucess);
app.use(pageerror.pageerror1);




app.listen(3000);