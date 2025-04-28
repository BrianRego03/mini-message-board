const {Router}= require("express");
const messageRouter=Router();
const {fetchMessageByIndex}=require("../controllers/messageController")

messageRouter.get("/:index",(req,res)=>{
    res.render("viewMessage",{message:fetchMessageByIndex()})
})

