// we can also create a new path segment:
// we create a new folder, we give it the path name we want
// e.g. news, the index.js in this new map will be our-domain/news
// and the 'other-file' in the map will be be our-domain/news/other-file
// and so on... other-file can become a folder in /news with an index.js...

const NewsPage = () => {
  return <h1>The News Page</h1>;
};

export default NewsPage;
