import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
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

  client.close();

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
  //find: first argument filters the documents  ( {} = all ); the second one filter the fields ( 1 = true )
  // array of id that we will use to set the allowed paths
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupsId) });

  client.close();

  return {
    //fetch data for a single meetup
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    },
    revalidate: 10,
  };
};

export default MeetupDetails;
