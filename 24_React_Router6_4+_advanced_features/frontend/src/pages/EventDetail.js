import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

// we can't use hooks in a no-component, but...
//the loader receive automatically an object with all te request info
export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not select details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
