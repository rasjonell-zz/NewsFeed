import React, { useState } from "react";

export const QueryContext = React.createContext('');

export default ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};
