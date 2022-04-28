// The traditional way to link
// Problem: we lose all the reactivity:
// we reload the page, no longer single page application
// we lose all states... and so on

import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <a href="/news/news1"> News 1</a>
        </li>
        <li>
          <a href="/news/news2"> News 2</a>
        </li>
        <li>
          <a href="/news/news3"> News 3</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
