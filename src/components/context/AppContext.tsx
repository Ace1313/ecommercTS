import { createContext, useReducer } from 'react';
import { AppReducer, AppAction } from './AppReducer';
import { mockProducts } from '../../mockProducts';
import { ProductItem } from '../../interface/ecomerce.interface';
import { useEffect } from 'react';

const initialState = {
   isLoggedIn: false,
   startProducts: mockProducts,
   cart: [] as ProductItem[],
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

   useEffect(() => {
      if (state.isLoggedIn) {
         localStorage.setItem('isLoggedIn', 'true');
      }
   }, [state]);

   return (
      <AppContext.Provider value={{ state, dispatch }}>
         {children}
      </AppContext.Provider>
   );
}

export default AppContextProvider;
