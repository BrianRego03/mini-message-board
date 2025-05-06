const {Router}= require("express");
const indexRouter = Router();

const {fetchAllMessages, deleteEverything}=require("../controllers/indexController");

indexRouter.get("/", fetchAllMessages);
indexRouter.get("/masterDelete",deleteEverything);


module.exports=indexRouter;