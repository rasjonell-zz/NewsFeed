import Main from "main";
import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import NewsContextProvider from "contexts/newsContext";
import QueryContextProvider from "contexts/queryContext";
import PinnedContextProvider from "contexts/pinnedContext";
import NotificationContextProvider from "contexts/notificationContext";

ReactDOM.render(
  <CookiesProvider>
    <QueryContextProvider>
      <NotificationContextProvider>
        <NewsContextProvider>
          <PinnedContextProvider>
            <Main />
          </PinnedContextProvider>
        </NewsContextProvider>
      </NotificationContextProvider>
    </QueryContextProvider>
  </CookiesProvider>,
  document.getElementById("root")
);
