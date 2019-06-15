import React, { useState } from "react";

export const QueryContext = React.createContext("");

export default ({ children }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider value={{ query, setQuery, page, setPage }}>
      {children}
    </QueryContext.Provider>
  );
};
