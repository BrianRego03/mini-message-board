const {Router}=require("express");
const newMsgRouter=Router();
const {sendMessageToDatabase}=require("../controllers/newMsgController");

newMsgRouter.get("/",(req,res)=>{
    res.render("form");
})

newMsgRouter.post("/",(req,res)=>{
    sendMessageToDatabase();
})

module.exports=newMsgRouter;