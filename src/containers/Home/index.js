import React, { useState } from "react";

import InfiniteScroll from "react-infinite-scroller";

export default () => {
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async page => {
    const url = new URL("https://content.guardianapis.com/search");
    const params = [
      ["api-key", process.env.REACT_APP_API_KEY],
      ["page", page],
      ["page-size", 5],
      ["show-fields", "headline,thumbnail"]
    ];
    url.search = new URLSearchParams(params);

    const result = await fetch(url);
    const {
      response: { results }
    } = await result.json();

    setNews([...news].concat(results));
  };

  console.log(news);

  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={hasMore}
      loadMore={loadMore}
      loader={<h2>Loading..</h2>}
    >
      <div>
        {news.map(item => (
          <>
            <h1>{item.fields.headline}</h1>
            <img src={item.fields.thumbnail} />
          </>
        ))}
      </div>
    </InfiniteScroll>
  );
};
