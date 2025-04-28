const db=require("../db");

const fetchAllMessages= async(req,res)=>{
    const messages = await db.serveMessages();
    res.render("index",{title:"Mini Messageboard",messages:messages})
}

module.exports={fetchAllMessages};