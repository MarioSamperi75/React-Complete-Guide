import { Fragment } from "react";
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupsId: "m1",
        },
      },
      {
        params: {
          meetupsId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupsId = context.params.meetupsId;

  // fetch data from api
  return {
    //fetch data for a sngle meetup
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
