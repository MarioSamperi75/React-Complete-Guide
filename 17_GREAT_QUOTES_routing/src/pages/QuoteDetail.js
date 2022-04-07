import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

//we use hooks and APIs exact as we did in quote.js
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

// we use an UseRouteMatch to get info about the actual path
// and write the address dynamically
// .path  => quotes/:quoteid   (for paths)
// .url   => quotes/p1         (for links)

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  // in this case send request needs a parameter
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <h1>No quote found</h1>;
  }

  // we added a link to show the comments
  // we added that in a route with exact path
  // so that it desappear when we go in the comments page
  // a way to render something conditionally
  // without managing states

  return (
    <section>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
