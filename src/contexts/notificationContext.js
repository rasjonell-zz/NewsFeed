import React, { useState } from "react";

export const NotificationContext = React.createContext(false);

export default ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NotificationContext.Provider value={{ open, setOpen }}>
      {children}
    </NotificationContext.Provider>
  );
};
