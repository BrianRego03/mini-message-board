const {Router}= require("express");
const indexRouter = Router();

const messages=[
    {
        text:"Hello there!",
        user:"Obi-Wan Kenobi",
        added: new Date()
    },
    {
        text:"General Kenobi!",
        user:"General Grievous",
        added:new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index",{title:"Mini Messageboard",messages:messages});
}
)