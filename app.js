const express=require("express");
const app =express();
const path=require("node:path");
const indexRouter=require("./routes/indexRouter")
const messageRouter=require("./routes/messageRouter")
const newMsgRouter=require("./routes/newMsgRouter")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use("/",indexRouter);
app.use("/messages",messageRouter);
app.use("/new",newMsgRouter);


const PORT=3000;
app.listen(PORT,()=>{
    console.log("Check");
    
})