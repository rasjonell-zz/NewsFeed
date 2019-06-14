import Main from "main";
import React from "react";
import ReactDOM from "react-dom";
import NewsContextProvider from "contexts/newsContext";
import QueryContextProvider from "contexts/queryContext";

ReactDOM.render(
  <QueryContextProvider>
    <NewsContextProvider>
      <Main />
    </NewsContextProvider>
  </QueryContextProvider>,
  document.getElementById("root")
);
