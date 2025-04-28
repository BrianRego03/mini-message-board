const db=require("../db");

const fetchMessageByIndex = async(req,res)=>{
    const {messageIndex}=req.params;
    const message=await db.serveParticularMessage(messageIndex);
    // console.log(message);

    res.render("viewMessage",{message:message});
}

module.exports={fetchMessageByIndex};