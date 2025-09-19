import { createContext } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const name = "Mudassar Ansari";

  return <TestContext.Provider value={name}>{children}</TestContext.Provider>;
};
