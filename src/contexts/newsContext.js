import take from "lodash/take";
import isEqual from "lodash/isEqual";
import uniqWith from "lodash/uniqWith";
import { fetchNews } from "helpers/fetchHelper";
import differenceWith from "lodash/differenceWith";
import { QueryContext } from "contexts/queryContext";
import { NotificationContext } from "contexts/notificationContext";
import React, { useState, useContext, useEffect, useRef } from "react";

export const NewsContext = React.createContext([]);

export default ({ children }) => {
  const interval = useRef(null);
  const [news, setNews] = useState([]);
  const [latest, setLatest] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { setOpen } = useContext(NotificationContext);
  const { query, page, setPage } = useContext(QueryContext);

  useEffect(() => {
    interval.current = setInterval(async () => {
      const latestNews = await fetchNews(1, query);
      checkLatest(latestNews);
    }, 10000);

    return () => {
      clearInterval(interval.current);
    };
  }, [news]);

  const checkLatest = latestNews => {
    const uniqueNews = differenceWith(
      take(news, latestNews.length),
      latestNews,
      isEqual
    );

    if (latest.length && uniqueNews.length) {
      setNews([...latest, ...news]);
      setLatest(uniqueNews);
      setOpen(true);
    } else if (latest.length && !uniqueNews.length) {
      setOpen(false);
      setNews([...latest, ...news]);
      setLatest([]);
    } else if (!latest.length && uniqueNews.length) {
      setLatest(uniqueNews);
      setOpen(true);
    }
  };

  const loadNews = async () => {
    const results = await fetchNews(page, query);

    if (results.length === 0) return setHasMore(false);

    setNews(uniqWith([...news].concat(results), isEqual));
    setPage(page + 1);
  };

  return (
    <NewsContext.Provider
      value={{ news, setNews, loadNews, hasMore, setHasMore, latest, setLatest }}
    >
      {children}
    </NewsContext.Provider>
  );
};
