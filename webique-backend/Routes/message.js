const {Router}=require("express");
const { msgModel } = require("../Model/message.model");

const messageRouter=Router();

messageRouter.get("/all", async(req,res)=>{
    try{
        let allMsg=await msgModel.find();

        res.send({"message":allMsg});
    } catch(err){
        console.log(err);
        res.send({"message":"Something went wrong"});
    }
});

messageRouter.post("/add",async(req,res)=>{
    let body=req.body;
    try{
        let data=new msgModel(body);
        await data.save();
        res.send({"message":"message added"});
    } catch(err){
        res.send({"message":"Something went wrong"});
    }
});

messageRouter.delete("/remove/:id",async(req,res)=>{
    let ID=req.params.id;
    try{
        await msgModel.findByIdAndDelete({_id:ID});
        res.send({"message":"message deleted"});
    } catch(err){
        res.send({"message":"Something went wrong"});
    }
});

module.exports=messageRouter;