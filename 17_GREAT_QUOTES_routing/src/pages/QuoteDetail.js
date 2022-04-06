import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>QUOTE DETAIL</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quotesId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
