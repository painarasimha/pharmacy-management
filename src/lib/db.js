import { MongoClient } from 'mongodb';

let client;
let db;
const MONGODB_URI = 'mongodb+srv://painarasimha:MvNc_5240@pharmacy-management-sys.wibdt.mongodb.net/';

async function MongoDBDatabase() {
    if (!client){
        client = new MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db();
    }
    return { db, client };
}

export { MongoDBDatabase };