import React, { useState, useContext } from "react";
import { fetchNews } from "helpers/fetchHelper";
import { QueryContext } from "contexts/queryContext";

export const NewsContext = React.createContext([]);

export default ({ children }) => {
  const [news, setNews] = useState([]);
  const { query } = useContext(QueryContext);
  const [hasMore, setHasMore] = useState(true);

  const loadNews = async page => {
    const results = await fetchNews(page, query);

    if (results.length === 0) return setHasMore(false);

    setNews([...news].concat(results));
  };

  return (
    <NewsContext.Provider
      value={{ news, setNews, loadNews, hasMore, setHasMore }}
    >
      {children}
    </NewsContext.Provider>
  );
};
