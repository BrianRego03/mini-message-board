const {Router}= require("express");
const indexRouter = Router();



indexRouter.get("/", (req, res) => {
    res.render("index",{title:"Mini Messageboard",messages:messages});
}
)

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