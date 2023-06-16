import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

// the fetched data will be available (by useLoaderData)
// in all the siblings and children, not in the parent
// check app.js

function EventsPage() {
  const data = useLoaderData();

  return <EventsList events={data} />;
}

export default EventsPage;
