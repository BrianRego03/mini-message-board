const {Router}= require("express");
const messageRouter=Router();
const {fetchMessageByIndex}=require("../controllers/messageController")

messageRouter.get("/:messageIndex",fetchMessageByIndex)

module.exports=messageRouter;

