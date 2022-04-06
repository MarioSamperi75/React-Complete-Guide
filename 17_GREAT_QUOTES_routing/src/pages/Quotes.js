import QuoteList from "../components/quotes/QuoteList";

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

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default Quotes;
