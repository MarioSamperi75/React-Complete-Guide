import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

// the fetched data will be available (by useLoaderData)
// in all the siblings and children, not in the parent
// check app.js

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch events." };
  } else {
    return response;
    // react router will extract the data automatically from the response object
  }
};
