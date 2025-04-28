const db=require("../db");

const fetchMessageByIndex = async(req,res)=>{
    const {messageIndex}=req.params;
    const message=await db.serveParticularMessage(+(messageIndex));


    res.send(message);
}

module.exports={fetchMessageByIndex};