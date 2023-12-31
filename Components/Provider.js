import { createContext, useState, useContext } from "react";
export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [state, setState] = useState("Granada"); //My default value
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
