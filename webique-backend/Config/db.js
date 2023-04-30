// This file connect's our backend with MongoDB data base.

const mongoose=require("mongoose");

require("dotenv").config();

const connection=mongoose.connect(process.env.MongoURL);

module.exports={connection};