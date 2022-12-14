import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://www.celebritycruises.com/blog/content/uploads/2022/06/messina-italy-history-culture-view-hero-1600x890.jpg"
      title="Messina"
      address="Contrada Citola, 21"
      description="Cooperativa prosperità"
    />
  );
};
export const getStaticPaths = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://mariosss:Ssb2017!@cluster0.7wrvi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //find: first argument filters the documents  ( {} = all ); the second one filter the fields ( 1 = true )
  // array of id that we will use to set the allowed paths
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupsId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupsId = context.params.meetupsId;

  const client = await MongoClient.connect(
    "mongodb+srv://mariosss:Ssb2017!@cluster0.7wrvi.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  return {
    //fetch data for a single meetup
    props: {
      meetupData: {
        image:
          "https://www.celebritycruises.com/blog/content/uploads/2022/06/messina-italy-history-culture-view-hero-1600x890.jpg",
        id: meetupsId,
        title: "Messina",
        address: "Contrada Citola, 21",
        description: "Cooperativa prosperità",
      },
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
