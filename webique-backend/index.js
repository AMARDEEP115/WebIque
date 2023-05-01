const express = require("express");
const messageRouter = require("./Routes/message");
const adminRouter = require("./Routes/admin");
const { connection } = require("./Config/db");
const cors=require("cors");
const aboutusRouter = require("./Routes/aboutus");

require("dotenv").config();

const app=express();

app.use(express.json());

app.use(cors({
    origin:"*",
}));

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.use("/message",messageRouter); // messages route will be accessed from this.

app.use("/admin",adminRouter);     // admin routes will be accessed from this.

app.use("/about",aboutusRouter);   // about us route will be accessed from this.

app.listen(process.env.Port || 8080 , async()=>{
    try{
        await connection;
        console.log("connected to DB");
    } catch (err) {
        console.log(err);
        console.log("not-connected to DB");
    }
    console.log(`server is running at port ${process.env.port || 8080}`);
});