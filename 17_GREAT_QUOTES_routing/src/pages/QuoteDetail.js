import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    id: "q2",
    author: "Mother Teresa",
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    id: "q3",
    author: "Walt Disney",
    text: "The way to get started is to quit talking and begin doing.",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <h1>No quote found</h1>;
  }

  // we added a link to show the comments
  // we added that in a route with exact path
  // so that it desappear when we go in the comments page
  // a way to render something conditionally
  // without managing states
  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quotesId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
