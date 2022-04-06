import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

// useHistory allows the programmatic navigation
//  push allows create a new history entry
//  replace allows to replace the current entry without creting a new one

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};

export default NewQuote;
