// Dynamic pages: the path segment can be dynamic
// just add an identifier between square brackets as filename
// everything we add after our-domain/news/
// will load the detail page

// we can get the concrete value entered in the URL
// we will use useRouter, and the method query.identifier
// in this case router.query.newsId

import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  // we can fetch the entered name and e.g. send a request to a database
  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
