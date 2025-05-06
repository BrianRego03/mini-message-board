const pool =require("./pool");

async function serveMessages(){
    const {rows}=await pool.query("SELECT * FROM messages");
    console.log(rows);
    return rows;
}

async function serveParticularMessage(index){
    const {rows}=await pool.query("SELECT * FROM messages WHERE id=$1",[index]);
    console.log(rows[0]);

    return rows[0];
}

async function postMessage(msgObject){
    // messages.push(msgObject);
    const {text,title,userName,added}=msgObject;
    await pool.query(`INSERT INTO messages (username,added,title,text)
        VALUES($1,$2,$3,$4)`,[username,added,title,text]);
    return true;
}

async function deleteAll(){
    await pool.query(`DELETE FROM messages`);
}

module.exports={
    serveMessages,
    serveParticularMessage,
    postMessage
}