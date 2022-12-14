//import { useEffect, useState } from "react";
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import next from "next";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta   
          name='description'
          content='Pagina di prova per vedere se riesco a fare qualcosa con Next.js'
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
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
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};
export default HomePage;
