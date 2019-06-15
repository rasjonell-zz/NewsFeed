import React from "react";
import some from "lodash/some";
import useLocalStorage from "hooks/useLocalStorage";
import { fetchSelected } from "helpers/fetchHelper";

export const PinnedContext = React.createContext(null);

export default ({ children }) => {
  const [pinned, savePinned] = useLocalStorage("pinned", null);

  const setPinned = async id => {
    if (pinned && !some(pinned, { id })) {
      const [status, newPinned] = await fetchSelected(id);
      status === 'ok' && savePinned([...pinned, newPinned]);
    } else if (pinned && some(pinned, { id })) {
      const newPinned = pinned.filter(({ id: pid }) => pid !== id);
      savePinned(newPinned);
    } else {
      const [status, newPinned] = await fetchSelected(id);
      status === 'ok' && savePinned([newPinned]);
    }
  };

  return (
    <PinnedContext.Provider value={{ pinned, setPinned }}>
      {children}
    </PinnedContext.Provider>
  );
};
