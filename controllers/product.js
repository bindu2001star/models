const path=require('path');
exports.getaddproduct=(req,res,next)=>{
    //console.log("i am in the another123middleware");


    res.sendFile(path.join(__dirname,'../','views','product.html'));
    
}
exports.postaddproduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
}
exports.shopproducts=(req,res,next)=>{
    console.log("i am in the another middleware");
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
}
exports.success=(req,res,next)=>{
    console.log("sucess")
    res.write('<h1>Form successfuly filled</h1>');
}
exports.contact=(req,res,next)=>{
    console.log("contact us");
    res.sendFile(path.join(__dirname,'../','views','contact.html'));

}