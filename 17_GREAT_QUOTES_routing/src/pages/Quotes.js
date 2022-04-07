import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Albert Einstein",
//     text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
//   },
//   {
//     id: "q2",
//     author: "Mother Teresa",
//     text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
//   },
//   {
//     id: "q3",
//     author: "Walt Disney",
//     text: "The way to get started is to quit talking and begin doing.",
//   },
// ];

const Quotes = () => {
  // we use the hook and the method we imported as argument
  // true becus we begin with a pending state
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  //use effect to send that request when the component loads
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  //we check the different status to return different things
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if ((status === "completed" && !loadedQuotes) || loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default Quotes;
