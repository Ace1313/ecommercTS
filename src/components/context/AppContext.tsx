import { createContext, useReducer } from 'react';
import { AppReducer, AppAction } from './AppReducer';

const initialState = {
   isLoggedIn: false,
};

interface AppContextProps {
   state: typeof initialState;
   dispatch: (action: AppAction) => void;
}

interface Props {
   children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: Props) {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   return (
      <AppContext.Provider value={{ state, dispatch }}>
         {children}
      </AppContext.Provider>
   );
}

export default AppContextProvider;
