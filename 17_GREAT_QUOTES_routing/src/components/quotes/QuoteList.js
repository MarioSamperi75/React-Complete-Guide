import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

// #1 check the url (isSortingAscending)
// #2 create a button  and a method to change the URL and switch parameter
// #3 Adapt the text in the button dynamically
// #4 Create the sorting function, pass the quotes and the order
//    and get your sorted quotes to use in the rendering

// helper function that sorts quotes by id
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // this object transform the search location string to a js object
  // that is easier to use (?sort=asc  => sort : 'asc')
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  //just updating the URL
  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
