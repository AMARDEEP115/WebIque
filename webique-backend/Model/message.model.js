// This file tells how the data stored in data base will look like.

const mongoose=require("mongoose");

const msgSchema=mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String,
});

const msgModel=mongoose.model("message",msgSchema);

module.exports={msgModel};