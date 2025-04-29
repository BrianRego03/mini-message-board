const {Router}= require("express");
const indexRouter = Router();

const {fetchAllMessages}=require("../controllers/indexController");

indexRouter.get("/", fetchAllMessages);


module.exports=indexRouter;