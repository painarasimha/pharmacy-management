import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://painarasimha:MvNc_5240@pharmacy-management-sys.wibdt.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

let db;

export async function connectToDatabase() {
    if (!db){
        await client.connect();
        db = client.db('Pharmacy Management');
    }
    return { db };
}