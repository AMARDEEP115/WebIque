const mongoose=require("mongoose");

const msgSchema=mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String,
});

const msgModel=mongoose.model("message",msgSchema);

module.exports={msgModel};