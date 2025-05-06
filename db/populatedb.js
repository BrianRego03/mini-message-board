require('dotenv').config();

const {Client}=require("pg");

const createSQL=`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        added TIMESTAMPTZ,
        title VARCHAR (255),
        text TEXT
    );`

const insertSQL=`
    INSERT INTO messages (username,added,title,text)
    VALUES 
        ('Obi-wan Kenobi',$1,'Hello There','Surprised to see you here'),
        ('General Grievous',$2,'General Kenobi','I hate you...')
`;

async function main(){
    console.log("seeding");
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    await client.query(createSQL)
    await client.query(insertSQL,[new Date(), new Date()]);
    await client.end();
    console.log("done");
}

main();