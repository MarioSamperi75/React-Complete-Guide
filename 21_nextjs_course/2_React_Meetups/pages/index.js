//import { useEffect, useState } from "react";
import {MongoClient} from 'mongodb';

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {

  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://mariosss:Ssb2017!@cluster0.7wrvi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  // MongoDB has a ObjectId id that we needs to convert to a string
  // and back to an ObjectId when posting to the database
  return {
    props: {
      meetups: meetups.map((meetup)=>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id : meetup._id.toString()

      })),
    },
    revalidate: 10,
  };
};
export default HomePage;
