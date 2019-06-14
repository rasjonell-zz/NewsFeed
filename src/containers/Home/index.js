import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { NewsContext } from "contexts/newsContext";
import InfiniteScroll from "react-infinite-scroller";

export default () => {
  const { news, loadNews, hasMore } = useContext(NewsContext);

  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={hasMore}
      loadMore={loadNews}
      loader={<h2 key="loading">Loading...</h2>}
    >
      <div>
        {news.map(item => (
          <div key={item.id}>
            <h1>{item.fields.headline}</h1>
            <h3>Category: {item.pillarName}</h3>
            <img
              src={
                item.fields.thumbnail
                  ? item.fields.thumbnail
                  : `${process.env.PUBLIC_URL}/images/not_found.jpg`
              }
              alt={item.fields.headline}
            />
            <Link to={item.id}>Learn More</Link>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};
