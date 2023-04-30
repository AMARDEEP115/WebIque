//  This file is a seprate file for all required routes for messages from any vistor.

const {Router}=require("express");
const { msgModel } = require("../Model/message.model");

const messageRouter=Router();

// To get all messages recived from data base
messageRouter.get("/all", async(req,res)=>{
    try{
        let allMsg=await msgModel.find();

        res.send({"message":allMsg});
    } catch(err){
        console.log(err);
        res.send({"message":"Something went wrong"});
    }
});

// To add a new messages in data base
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

// To delete a messages from data base
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