import {MongoClient} from 'mongodb';

//  /api/new-meetup
// POST  /api/new-meetup

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const data = req.body;  

        const client= await MongoClient.connect('mongodb+srv://mariosss:Ssb2017!@cluster0.7wrvi.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        meetupsCollection.insertOne(data);
    }
}

export default handler;