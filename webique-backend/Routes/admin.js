//  This file is a seprate file for all required routes for admin.

const {Router}=require("express");

const adminRouter=Router();

// To authenticate if admin or not.
adminRouter.post("/login",(req,res)=>{
    let body=req.body;
    try{
        if(body.email==="admin@webique.com" && body.password==="admin"){
            res.send({"message":"login succesfull"});
        } else {
            res.send({"message":"Please check email or password"});
        }
    } catch(err){
        res.send({"message":"Something went wrong"});
    }
});


module.exports=adminRouter;