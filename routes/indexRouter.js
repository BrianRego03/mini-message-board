const {Router}= require("express");
const indexRouter = Router();

const {fetchAllMessages}=require("../controllers/indexController");

indexRouter.get("/", fetchAllMessages);

indexRouter.get("/new",(req,res)=>{
    res.render("form");
})

indexRouter.post("/new",(req,res)=>{
    let msgObject={};
    msgObject.text=req.body.content;
    msgObject.user=req.body.name;
    msgObject.added=new Date();
    messages.push(msgObject);

    res.redirect("/");
    
})

module.exports=indexRouter;