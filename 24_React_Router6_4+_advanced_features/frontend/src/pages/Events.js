import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

// the fetched data will be available (by useLoaderData)
// in all the siblings and children, not in the parent
// check app.js

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    // status: 500,
    //});

    throw json({ message: "Could not fetch events." }, { status: 500 });
    // it will look after the nearest errorElement in the routing!
  } else {
    const resDate = await response.json();
    return resDate.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
