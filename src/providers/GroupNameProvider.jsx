import { createContext, useState } from "react";

export const GroupNameContext = createContext({});

export const GroupNameProvider = (props) => {
  const { children } = props;

  const [name, setName] = useState("");

  return (
    <GroupNameContext.Provider value={{ name,setName }}>
      {children}
    </GroupNameContext.Provider>
  );
};
