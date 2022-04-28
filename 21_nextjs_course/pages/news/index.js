// The traditional way to link
// Problem: we lose all the reactivity:
// we reload the page, no longer single page application
// we lose all states... and so on

// Solution: we import Link and use it as component instead of a
// just so!! We will stay in the same page
// next.js will simulate the routing automatically

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/news1"> News 1</Link>
        </li>
        <li>
          <Link href="/news/news2"> News 2</Link>
        </li>
        <li>
          <Link href="/news/news3"> News 3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
