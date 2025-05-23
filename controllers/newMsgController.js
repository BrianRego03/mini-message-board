const db=require("../db/queries");

const sendMessageToDatabase=async(req,res)=>{
    let msgObject={};
    msgObject.text=req.body.content;
    msgObject.title=req.body.title;
    msgObject.username=req.body.name;
    msgObject.added=new Date();
    const serverStatus=await db.postMessage(msgObject);
    if(serverStatus){
        res.redirect("/");
    }
}

module.exports={sendMessageToDatabase};