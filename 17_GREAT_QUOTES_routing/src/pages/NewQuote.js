import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};

export default NewQuote;
