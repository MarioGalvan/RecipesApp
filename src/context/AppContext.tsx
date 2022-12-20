import React, { createContext, useState } from "react";
import { GetAllRecipes } from "../api/ApiUtil";

type ContextProps = {
  data?: any;
};

const AppContextInitial: ContextProps = {
  data: [],
};

export const AppContext = createContext({} as ContextProps);

export const AppProvider = ({ children }: any) => {
  const [AppData, setAppData] = useState(AppContextInitial);

  React.useEffect(() => {
    async function getRecipes() {
      const data: any = await GetAllRecipes();
      let {
        data: { recipes },
      } = data;
      setAppData(recipes);
    }

    getRecipes();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data: AppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
