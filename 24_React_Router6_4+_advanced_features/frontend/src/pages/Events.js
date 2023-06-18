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
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
    // it will look after the nearest errorElement in the routing!
  } else {
    return response;
  }
};
