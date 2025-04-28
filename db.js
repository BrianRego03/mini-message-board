const messages=[
    {
        text:"Hello there!",
        title:"Emergency Transmission",
        user:"Obi-Wan Kenobi",
        added: new Date()
    },
    {
        text:"General Kenobi!",
        title:"Important!",
        user:"General Grievous",
        added:new Date()
    }
];

async function serveMessages(){
    return messages;
}

async function serveParticularMessage(index){
    return messages[index];
}

module.exports={serveMessages,serveParticularMessage};