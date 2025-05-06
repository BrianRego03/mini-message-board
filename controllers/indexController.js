const db=require("../db/queries");

const fetchAllMessages= async(req,res)=>{
    const messages = await db.serveMessages();
    console.log(messages);
    res.render("index",{title:"Mini Messageboard",messages:messages})
}

module.exports={fetchAllMessages};