import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";

// useHistory allows the programmatic navigation
//  push allows create a new history entry
//  replace allows to replace the current entry without creting a new one

const NewQuote = () => {
  // initilizing the hook: we pass the method that we imported
  // and we get the sendMEthod and the status
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  // we get the sendRequest method from the hook
  // (we passed the addQuote method when we initialized the hook)
  // and we pass the data
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    // we send isLoading to conditionally render the 'waiting' spinner
    <section>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </section>
  );
};

export default NewQuote;
